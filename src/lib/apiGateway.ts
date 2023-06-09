export const formatJSONResponse = ({
     // accept an object as an argument
    statusCode = 200,
    data = {},
    headers,
  }: {  
    statusCode?: number;
    data?: any;
    // accept two keys both with a "string" value
    headers?: Record<string, string>;
  }) => {
    return {
      statusCode,
      body: JSON.stringify(data),
      headers: {
        // allow requests from any domain
        "Access-Control-Allow-Origin": "*",
        // allow credentials in headers
        "Access-Control-Allow-Credentials": true,
        ...headers,
      },
    };
  };
  