import * as constants from '../../constants/constants';

export const getAllShows = (page) => {
    return {
        type: constants.GET_ALL_SHOWS,
        page,
    }
}

export const getAllShowsSuccess = (shows) => {
    return {
        type: constants.GET_ALL_SHOWS_SUCCESS,
        shows,
    }
}

export const getAllShowsError = (error) => {
    return {
        type: constants.GET_ALL_SHOWS_FAIL,
        error,
    }
}

export const getFeaturedShow = () => {
    return {
        type: constants.GET_FEATURED_SHOW,
    }
}

export const getFeaturedShowSuccess = (result) => {
    return {
        type: constants.GET_FEATURED_SHOW_SUCCESS,
        result,
    }
}

export const getFeaturedShowFail = (error) => {
    return {
        type: constants.GET_FEATURED_SHOW_FAIL,
        error,
    }
}

export const loadMore = () => {
    return {
        type: constants.LOAD_MORE,
    }
}

export const resetPage = () => {
    return {
        type: constants.RESET_PAGE,
    }
}

export const getModalInfo = (id, name, info, position, trailer) => {
    return {
        type: constants.GET_MODAL_INFO,
        id, name, info, position, trailer,
    }
}

export const getModalInfoSuccess = (id, name, info, trailer, position) => {
    return {
        type: constants.GET_MODAL_INFO_SUCCESS,
        id, name, info, trailer, position
    }
}

export const getModalInfoFail = (error) => {
    return {
        type: constants.GET_MODAL_INFO_FAIL,
        error,
    }
}

export const closeModal = () => {
    return {
        type: constants.CLOSE_MODAL,
    }
}