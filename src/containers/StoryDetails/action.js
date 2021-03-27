import * as constants from '../../constants/constants';

export const getStoriesInfo = (username) => {
    return {
        type: constants.GET_STORIES_INFO,
        username,
    }
}

export const getStoriesInfoSuccess = (storiesInfo) => {
    return {
        type: constants.GET_STORIES_INFO_SUCCESS,
        storiesInfo,
    }
}

export const getStoriesInfoFail = (error) => {
    return {
        type: constants.GET_STORIES_INFO_FAIL,
        error,
    }
}

export const clearStoriesInfo = () => {
    return {
        type: constants.CLEAR_STORIES_INFO,
    }
}

