import httpService from "./httpService.js";
import config from "../../config.json";


const postsEndpoint = `${config.apiUrl}/posts`;

function getPosts() {
    return httpService.get(postsEndpoint);

}

function getPostById(id) {
    return httpService.get(`${postsEndpoint}/${id}`);
}

function savePost(post) {
    if (post._id) {
        const data = {...post};
        delete data._id;
        return httpService.put(`${postsEndpoint}/${post._id}`, data);
    }
    return httpService.post(postsEndpoint, post);
}

function deletePostById(id) {
    return httpService.delete(`${postsEndpoint}/${id}`);
}

export {
    getPosts,
    getPostById,
    savePost,
    deletePostById,

}
