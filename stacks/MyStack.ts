import {
  Api,
  ReactStaticSite,
  StackContext,
  Table,
} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  // Create the table
  const table = new Table(stack, "Counter", {
    fields: {
      counter: "string",
    },
    primaryIndex: { partitionKey: "counter" },
  });

  const resumeTable = new Table(stack, "resume-table", {
    fields: {
      name: "string",
      phone: "string",
      email: "string",
      website: "string",
      experience: "string",
    },
    primaryIndex: { partitionKey: "email" },
  });

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        // Pass in the table name to our API
        environment: {
          tableName: table.tableName,
        },
      },
    },
    routes: {
      "POST /": "functions/lambda.main",
    },
  });

  const resumeApi = new Api(stack, "resume-api", {
    defaults: {
      function: {
        environment: {
          tableName: resumeTable.tableName,
        },
      },
    },
    routes: {
      "GET /resumes": "functions/list.handler",
      "POST /resumes": "functions/create.handler",
      "GET /resumes/{email}": "functions/get.handler",
      "PUT /resumes/{email}": "functions/update.handler",
      "DELETE /resumes/{email}": "functions/delete.handler",
    },
  });

  // Allow the API to access the table
  api.attachPermissions([table]);

  resumeApi.attachPermissions([resumeTable]);

  // Deploy our React app
  const site = new ReactStaticSite(stack, "ReactSite", {
    path: "frontend",
    environment: {
      REACT_APP_API_URL: api.url,
      REACT_APP_RESUME_API_URL: resumeApi.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
    ResumeApiEndpoint: resumeApi.url,
  });
}
