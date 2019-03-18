import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json' // Require for JSON PUT requests
    }
});

export function fetchArtists() {
    return client.get('/api/v1/artists');
}

export function fetchAlbums() {
    return client.get('/api/v1/albums');
}

export function addArtist(artist) {
    return client.post('/api/v1/artists/create/', artist);
}

export function editArtist(id, params) {
    return axios.put(`${API_BASE_URL}/artists/id`, params);
}

export function deleteArtist(id) {
    return client.delete(`/api/v1/artists/remove/${id}`);
}
