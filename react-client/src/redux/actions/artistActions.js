import {
    ADD_ARTIST_SUCCESS,
    ADD_ARTIST_STARTED,
    ADD_ARTIST_FAILURE,
    FETCH_ARTIST_SUCCESS,
    FETCH_ARTIST_FAILURE,
    FETCH_ARTIST_STARTED,
    DELETE_ARTIST_STARTED,
    DELETE_ARTIST_SUCCESS
} from '../constants/action-types';
import * as api from '../../api';

export const fetchArtists = () => {
    return dispatch => {
        dispatch(fetchArtistsStarted());
        api.fetchArtists()
            .then(resp => {
                dispatch(fetchArtistsSuccess(resp));
            })
            .catch(err => {
                dispatch(fetchArtistsFailure(err));
            });
    };
};

export const addArtist = ({ name, photo, albums }) => {
    return dispatch => {
        dispatch(addArtistStarted());
        api.addArtist({ name, photo, albums })
            .then(res => {
                dispatch(addArtistSuccess(res));
            })
            .catch(err => {
                dispatch(addArtistFailure(err.message));
            });
    };
};

export const deleteArtist = id => {
    return dispatch => {
        dispatch(deleteArtistStarted());
        api.deleteArtist(id)
            .then(res => {
                dispatch(deleteArtistSuccess(res));
            })
            .catch(err => {
                dispatch(deleteArtistFailure(err.message));
            });
    };
};

const addArtistSuccess = artists => ({
    type: ADD_ARTIST_SUCCESS,
    payload: {
        artists
    }
});

const addArtistStarted = () => ({
    type: ADD_ARTIST_STARTED
});

const addArtistFailure = error => ({
    type: ADD_ARTIST_FAILURE,
    payload: {
        error
    }
});

const deleteArtistSuccess = id => ({
    type: DELETE_ARTIST_SUCCESS,
    payload: {
        id
    }
});

const deleteArtistStarted = () => ({
    type: DELETE_ARTIST_STARTED
});

const deleteArtistFailure = error => ({
    type: ADD_ARTIST_FAILURE,
    payload: {
        error
    }
});

const fetchArtistsSuccess = artists => ({
    type: FETCH_ARTIST_SUCCESS,
    payload: artists
});

const fetchArtistsFailure = error => ({
    type: FETCH_ARTIST_FAILURE,
    payload: {
        error
    }
});

const fetchArtistsStarted = () => ({
    type: FETCH_ARTIST_STARTED
});
