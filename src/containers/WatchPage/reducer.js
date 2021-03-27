import * as constants from '../../constants/constants';

export const initialState = {
    getAllShows: {
        isLoading: false,
        error: false,
        shows: [],
        page: {
            start: 0,
            end: 6
        },
    },
    getFeaturedShow: {
        isLoading: false,
        error: false,
        result: [],
    },
    getModalInfo: {
        isLoading: false,
        error: false,
        info: null,
        isOpen: false,
    }
};

export default function watchReducer(state = initialState, action) {
    switch (action.type) {
        case constants.GET_ALL_SHOWS:
            return {
                ...state,
                getAllShows: {
                    ...state.getAllShows,
                    isLoading: true,
                    error: false,
                },
            }
        case constants.GET_ALL_SHOWS_SUCCESS:
            return {
                ...state,
                getAllShows: {
                    ...state.getAllShows,
                    isLoading: false,
                    error: false,
                    shows: state.getAllShows.shows.concat([...new Set(action.shows.map(show => show))]),
                },
            }
        case constants.GET_ALL_SHOWS_FAIL:
            return {
                ...state,
                getAllShows: {
                    ...state.getAllShows,
                    isLoading: false,
                    error: action.error,
                    shows: [],
                },
            }
        case constants.GET_FEATURED_SHOW:
            return {
                ...state,
                getFeaturedShow: {
                    isLoading: true,
                    error: false,
                    result: [],
                },
            }
        case constants.GET_FEATURED_SHOW_SUCCESS:
            return {
                ...state,
                getFeaturedShow: {
                    isLoading: false,
                    error: false,
                    result: action.result,
                },
            }
        case constants.GET_FEATURED_SHOW_FAIL:
            return {
                ...state,
                getFeaturedShow: {
                    isLoading: false,
                    error: action.error,
                    result: [],
                },
            }
        case constants.LOAD_MORE:
            return {
                ...state,
                getAllShows: {
                    ...state.getAllShows,
                    page: {
                        start: state.getAllShows.page.start + 6,
                        end: state.getAllShows.page.end + 6,
                    },
                }
            }
        case constants.RESET_PAGE:
            return {
                ...state,
                getAllShows: {
                    isLoading: false,
                    error: false,
                    shows: [],
                }
            }
        case constants.GET_MODAL_INFO:
            return {
                ...state,
                getModalInfo: {
                    isLoading: true,
                    error: false,
                    isOpen: false,
                    info: null,
                },
            }
        case constants.GET_MODAL_INFO_SUCCESS:
            return {
                ...state,
                getModalInfo: {
                    isLoading: false,
                    error: false,
                    isOpen: true,
                    info: {
                        position: action.position,
                        id: action.id,
                        name: action.name,
                        summary: action.info.summary,
                        trailer: action.trailer,
                        rating: action.info.rating,
                        popularity: action.info.popularity,
                        language: action.info.language,
                        country: action.info.country,
                    },
                },
            }
        case constants.GET_MODAL_INFO_FAIL:
            return {
                ...state,
                getModalInfo: {
                    isLoading: false,
                    error: action.error,
                    isOpen: false,
                    info: null,
                },
            }
        case constants.CLOSE_MODAL:
            return {
                ...state,
                getModalInfo: {
                    ...state.getModalInfo,
                    isOpen: false,
                    info: null,
                }
            }
        default:
            return state;
    }
}