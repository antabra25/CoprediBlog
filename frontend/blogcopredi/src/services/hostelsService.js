import httpService from "./httpService.js";
import config from "../../config.json";

const hostelsEndpoint = `${config.apiUrl}/hostels`;


function hostelUrl(id) {
    return `${hostelsEndpoint}/${id}`;
}

function getHostels() {
    return httpService.get(hostelsEndpoint);

}

function getHostelById(id) {
    return httpService.get(hostelUrl(id));
}

function saveHostel(hostel) {
    if (hostel._id) {
        const data = {...hostel};
        delete data._id;
        return httpService.put(hostelUrl(hostel._id), data);
    }

    return httpService.post(hostelsEndpoint, hostel);
}

function deleteHostelById(id) {
    return httpService.delete(hostelUrl(id));
}

export {
    getHostels,
    getHostelById,
    saveHostel,
    deleteHostelById,
}