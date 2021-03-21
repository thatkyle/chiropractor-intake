const {
    DynamoDBClient,
    BatchWriteItemCommand
  } = require("@aws-sdk/client-dynamodb");
  
  // Set the AWS Region
  const REGION = "us-east-2"; //e.g. "us-east-1"
  
  // Set the parameters
  const params = {
    RequestItems: {
      products: [
        {
          PutRequest: {
            Item: {
              id: { S: "3" },
              category: {S: "a"},
              image: {S: "a"},
              price: {N: "1"},
              title: {S: "a"}
            },
          },
        },
      ],
    },
  };
  
  // Create DynamoDB service object
  const dbclient = new DynamoDBClient({ region: REGION });
  
  const run = async () => {
    try {
      const data = await dbclient.send(new BatchWriteItemCommand(params));
      console.log("Success, items inserted", data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();