import * as constants from '../../constants/constants';

export const initialState = {
    getStoriesInfo: {
        username: null,
        isLoading: false,
        error: false,
        storiesInfo: [],
    }
}

export default function storiesInfoReducer(state = initialState, action) {
    switch (action.type) {
        case constants.GET_STORIES_INFO:
            return {
                ...state,
                getStoriesInfo: {
                    username: action.username,
                    isLoading: true,
                    error: false,
                    storiesInfo: [],
                },
            }
        case constants.GET_STORIES_INFO_SUCCESS:
            return {
                ...state,
                getStoriesInfo: {
                    ...state.getStoriesInfo,
                    isLoading: false,
                    error: false,
                    storiesInfo: action.storiesInfo,
                },
            }
        case constants.GET_STORIES_INFO_FAIL:
            return {
                ...state,
                getStoriesInfo: {
                    ...state.getStoriesInfo,
                    isLoading: false,
                    error: action.error,
                    storiesInfo: [],
                },
            }
        case constants.CLEAR_STORIES_INFO:
            return {
                ...state,
                getStoriesInfo: {
                    username: null,
                    isLoading: false,
                    error: false,
                    storiesInfo: [],
                },
            }
        default:
            return state;
    }
}