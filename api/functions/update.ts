import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.tableName,
    Key: {
      email: event.pathParameters.email,
    },
    UpdateExpression:
      "SET #nm = :name, phone = :phone, website = :website, experience = :experience",
    ExpressionAttributeValues: {
      ":name": data.name || null,
      ":phone": data.phone || null,
      ":website": data.website || null,
      ":experience": data.experience || null,
    },
    ExpressionAttributeNames: {
      "#nm": "name",
    },
    ReturnValues: "ALL_NEW",
  };

  const results = await dynamoDb.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(results.Attributes),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  };
};
