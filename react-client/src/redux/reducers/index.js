import {
    ADD_ARTIST_STARTED,
    ADD_ARTIST_SUCCESS,
    ADD_ARTIST_FAILURE,
    EDIT_ARTIST,
    FETCH_ARTIST_SUCCESS,
    FETCH_ARTIST_STARTED,
    FETCH_ARTIST_FAILURE,
    DELETE_ARTIST_STARTED,
    DELETE_ARTIST_SUCCESS,
    DELETE_ARTIST_FAILURE
} from '../constants/action-types';

const initialState = {
    artists: [],
    loading: false,
    error: null
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTIST_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_ARTIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                artists: [...state.artists, action.payload]
            };
        case ADD_ARTIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case EDIT_ARTIST:
            const { payload } = action;
            return {
                artists: state.artists.map(artist => {
                    if (artist.name === payload.name) {
                        return Object.assign({}, artist, payload.params);
                    }
                    return artist;
                })
            };
        case FETCH_ARTIST_STARTED: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case FETCH_ARTIST_SUCCESS: {
            return {
                ...state,
                artists: action.payload.data,
                loading: false
            };
        }
        case FETCH_ARTIST_FAILURE: {
            return {
                ...state,
                error: action.error,
                loading: false
            };
        }
        case DELETE_ARTIST_STARTED: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case DELETE_ARTIST_SUCCESS: {
            const { artists } = state;
            const filteredArtists = artists.filter(x => {
                return x._id !== action.payload.data;
            });
            return {
                ...state,
                artists: [...filteredArtists],
                loading: false
            };
        }
        case DELETE_ARTIST_FAILURE: {
            return {
                ...state,
                error: action.error,
                loading: false
            };
        }
        default:
            return state;
    }
}

export default rootReducer;
