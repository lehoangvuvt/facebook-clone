import * as constants from '../../constants/constants';

export const initialState = {
    handleModal: {
        isMouseEnter: false,
        position: {
            top: 0,
        },
        username: null,
        name: null,
        avatar: null,
        status: false,
    },
    getContacts: {
        isLoading: false,
        contacts: [],
        error: false,
    },
    getStories: {
        isLoading: false,
        stories: [],
        error: false,
        range: [0, 1],
    },
    openChatBox: {
        boxes: [],
    },
}

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case constants.TOGGLE_ON_MODAL:
            if (state.handleModal.username === null) {
                return {
                    ...state,
                    handleModal: {
                        isMouseEnter: true,
                        position: {
                            top: action.top,
                        },
                        username: action.username,
                        name: action.name,
                        avatar: action.avatar,
                        status: action.status,
                    },
                }
            } else {
                return {
                    ...state,
                }
            }
        case constants.TOGGLE_OFF_MODAL:
            return {
                ...state,
                handleModal: {
                    isMouseEnter: false,
                    position: {
                        top: 0,
                    },
                    username: null,
                    name: null,
                    avatar: null,
                    status: false,
                },
            }
        case constants.GET_CONTACTS:
            return {
                ...state,
                getContacts: {
                    isLoading: true,
                    error: false,
                    contacts: [],
                },
            }
        case constants.GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts: {
                    isLoading: false,
                    error: false,
                    contacts: action.contacts,
                },
            }
        case constants.GET_CONTACTS_FAIL:
            return {
                ...state,
                getContacts: {
                    isLoading: false,
                    error: action.error,
                    contacts: [],
                },
            }
        case constants.OPEN_CHAT_BOX:
            let isExisted = false;
            if (state.openChatBox.boxes.length < 3) {
                state.openChatBox.boxes.map(box => {
                    if (box.username === action.info.username) {
                        isExisted = true;
                    }
                });

                if (!isExisted) {
                    return {
                        ...state,
                        openChatBox: {
                            boxes: [...state.openChatBox.boxes, { name: action.info.name, avatar: action.info.avatar, username: action.info.username }],
                        }
                    }
                } else {
                    return {
                        ...state,
                    }
                }
            } else {
                state.openChatBox.boxes.map(box => {
                    if (box.username === action.info.username) {
                        isExisted = true;
                    }
                });

                if (!isExisted) {
                    return {
                        ...state,
                        openChatBox: {
                            boxes: [...state.openChatBox.boxes.filter((box, i) => i !== 2), { name: action.info.name, avatar: action.info.avatar, username: action.info.username }],
                        },
                    }
                } else {
                    return {
                        ...state,
                    }
                }
            }
        case constants.CLOSE_CHAT_BOX:
            return {
                ...state,
                openChatBox: {
                    boxes: state.openChatBox.boxes.filter(box => box.username !== action.username),
                },
            }
        case constants.GET_STORIES:
            return {
                ...state,
                getStories: {
                    isLoading: true,
                    stories: [],
                    error: false,
                    range: [0, 1],
                },
            }
        case constants.GET_STORIES_SUCCESS:
            return {
                ...state,
                getStories: {
                    isLoading: false,
                    stories: action.stories,
                    error: false,
                    range: [0, 1],
                },
            }
        case constants.GET_STORIES_FAIL:
            return {
                ...state,
                getStories: {
                    isLoading: true,
                    stories: [],
                    error: action.error,
                    range: [0, 1],
                },
            }
        default:
            return state;
    }
}