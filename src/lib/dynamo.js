"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamo = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamoClient = new client_dynamodb_1.DynamoDBClient({});
// Create an object to export with key value pairs
// some of these key value pairs will be functions
exports.dynamo = {
    write: (data, tableName) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: tableName,
            Item: data,
        };
        // pass to database input
        const command = new lib_dynamodb_1.PutCommand(params);
        // send input command
        yield dynamoClient.send(command);
        return data;
    })
};
