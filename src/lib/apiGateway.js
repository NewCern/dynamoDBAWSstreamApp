"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJSONResponse = void 0;
const formatJSONResponse = ({ statusCode = 200, data = {}, headers, }) => {
    return {
        statusCode,
        body: JSON.stringify(data),
        headers: Object.assign({ "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": true }, headers),
    };
};
exports.formatJSONResponse = formatJSONResponse;
