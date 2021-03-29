import * as constants from '../../constants/constants';

export const initialState = {
    centerMenuOption: 1,
    currentToolTip: {
        id: 0,
        name: null,
    },
    getSearchHistory: {
        isLoading: false,
        results: [],
        error: false,
    },
}

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case constants.CHANGE_OPTION:
            return {
                ...state,
                centerMenuOption: action.option,
            }
        case constants.SET_CURRENT_TOOLTIP:
            return {
                ...state,
                currentToolTip: {
                    id: action.id,
                    name: action.name,
                }
            }
        case constants.GET_SEARCH_HISTORY:
            return {
                ...state,
                getSearchHistory: {
                    ...state.getSearchHistory,
                    isLoading: true,
                },
            }
        case constants.GET_SEARCH_HISTORY_SUCCESS:
            return {
                ...state,
                getSearchHistory: {
                    isLoading: false,
                    error: false,
                    results: action.results.sort((a, b) => b.timestamp - a.timestamp),
                },
            }
        case constants.GET_SEARCH_HISTORY_FAIL:
            return {
                ...state,
                getSearchHistory: {
                    ...state.getSearchHistory,
                    isLoading: false,
                    error: action.error,
                },
            }
        default:
            return state;
    }
}