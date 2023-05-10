import { APIGatewayProxyEvent } from "aws-lambda";
import { dynamo } from "./lib/dynamo";
import { v4 as uuid } from "uuid";
import { formatJSONResponse } from "./lib/apiGateway";

export const handler = async (event: any = {}) => {
    try {
        const body = JSON.parse(event.body);
        const data = {
            ...body,
            personId: uuid()
        };
        // call write function from Library
        await dynamo.write(data, "PeopleTest");
        // if successfull, return Id number and message
        return formatJSONResponse({
            data: {
                message: "Data has been created",
                personId: data.personId,
            }
        });
        // if not successfull, return error
    } catch(error){
        return formatJSONResponse({
            statusCode: 502,
            data: {
                error
            }
        })
    }
};