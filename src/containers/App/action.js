import * as constants from '../../constants/constants';

export const changeOption = (option) => {
    return {
        type: constants.CHANGE_OPTION,
        option,
    }
}

export const setCurrentTooltip = (id, name) => {
    return {
        type: constants.SET_CURRENT_TOOLTIP,
        id, name,
    }
}

export const getSearchHistory = () => {
    return {
        type: constants.GET_SEARCH_HISTORY,
    }
}

export const getSearchHistorySuccess = (results) => {
    return {
        type: constants.GET_SEARCH_HISTORY_SUCCESS,
        results,
    }
}

export const getSearchHistoryFail = (error) => {
    return {
        type: constants.GET_SEARCH_HISTORY_FAIL,
        error,
    }
}