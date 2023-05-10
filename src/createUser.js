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
exports.handler = void 0;
const dynamo_1 = require("./lib/dynamo");
const uuid_1 = require("uuid");
const apiGateway_1 = require("./lib/apiGateway");
const handler = (event = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = JSON.parse(event.body);
        const data = Object.assign(Object.assign({}, body), { personId: (0, uuid_1.v4)() });
        // call write function from Library
        yield dynamo_1.dynamo.write(data, "PeopleTest");
        // if successfull, return Id number and message
        return (0, apiGateway_1.formatJSONResponse)({
            data: {
                message: "Data has been created",
                personId: data.personId,
            }
        });
        // if not successfull, return error
    }
    catch (error) {
        return (0, apiGateway_1.formatJSONResponse)({
            statusCode: 502,
            data: {
                error
            }
        });
    }
});
exports.handler = handler;
