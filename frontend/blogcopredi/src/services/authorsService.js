import httpService from "./httpService.js";
import config from "../../config.json";

const authorsEndpoint = `${config.apiUrl}/authors`;

function getAuthors() {
    return httpService.get(authorsEndpoint);

}

function getAuthorById(id) {
    return httpService.get(`${authorsEndpoint}/${id}`);
}

export {
    getAuthors,
    getAuthorById
}