import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function handler() {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": "eduardo@gmail.com",
    },
  };
  const results = await dynamoDb.query(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(results.Items),
  };
}
