import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function handler() {
  const params = {
    TableName: process.env.tableName,
    AttributesToGet: ["name", "email"],
  };

  const results = await dynamoDb.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(results.Items),
  };
}
