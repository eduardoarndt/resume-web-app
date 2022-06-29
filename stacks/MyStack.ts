import {
  Api,
  ReactStaticSite,
  StackContext,
  Table,
} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
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

  resumeApi.attachPermissions([resumeTable]);

  const site = new ReactStaticSite(stack, "ReactSite", {
    path: "frontend",
    environment: {
      REACT_APP_RESUME_API_URL: resumeApi.url,
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
    ResumeApiEndpoint: resumeApi.url,
  });
}
