import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const data = JSON.parse(event.body);

  if (isEmpty(data.name) || isEmpty(data.email) || isEmpty(data.experience)) {
    return {
      statusCode: 400,
    };
  }

  const params = {
    TableName: process.env.tableName,
    Item: {
      name: data.name,
      phone: data.phone,
      email: data.email,
      website: data.website,
      experience: data.experience,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(params.Item),
  };
};

function isEmpty(str: string) {
  return !str || str.length === 0;
}
