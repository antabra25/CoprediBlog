import httpService from "./httpService.js";
import config from "../../config.json";

const requestEndpoint = `${config.apiUrl}/requests`;


function getRequests() {
    return httpService.get(requestEndpoint);
}

function getRequestById(id) {
    return httpService.get(`${requestEndpoint}/${id}`);
}

function saveRequest(request) {
    if (request._id) {
        const data = {...request};
        delete data._id;
        return httpService.put(`${requestEndpoint}/${request._id}`, data);
    }
    return httpService.post(requestEndpoint, request);
}

function deleteRequestById(id) {
    return httpService.delete(`${requestEndpoint}/${id}`);
}

export {
    getRequests,
    getRequestById,
    saveRequest,
    deleteRequestById,
}