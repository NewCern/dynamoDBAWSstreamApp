"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJSONResponse = void 0;
const formatJSONResponse = ({ // accept an object
statusCode = 200, data = {}, headers, }) => {
    return {
        statusCode,
        body: JSON.stringify(data),
        headers: Object.assign({ 
            // allow requests from any domain
            "Access-Control-Allow-Origin": "*", 
            // allow credentials in headers
            "Access-Control-Allow-Credentials": true }, headers),
    };
};
exports.formatJSONResponse = formatJSONResponse;
