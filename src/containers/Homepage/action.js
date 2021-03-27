import * as constants from '../../constants/constants';

export const toggleOnModal = (top, username, avatar, name, status) => {
    return {
        type: constants.TOGGLE_ON_MODAL,
        top,
        username,
        avatar,
        name,
        status,
    }
}

export const toggleOffModal = () => {
    return {
        type: constants.TOGGLE_OFF_MODAL,
    }
}

export const getContacts = () => {
    return {
        type: constants.GET_CONTACTS,
    }
}

export const getContactsSuccess = (contacts) => {
    return {
        type: constants.GET_CONTACTS_SUCCESS,
        contacts,
    }
}

export const getContactsFail = (error) => {
    return {
        type: constants.GET_CONTACTS_FAIL,
        error,
    }
}

export const openChatBox = (info) => {
    return {
        type: constants.OPEN_CHAT_BOX,
        info,
    }
}

export const closeChatBox = (username) => {
    return {
        type: constants.CLOSE_CHAT_BOX,
        username,
    }
}

export const getStories = () => {
    return {
        type: constants.GET_STORIES,
    }
}

export const getStoriesSuccess = (stories) => {
    return {
        type: constants.GET_STORIES_SUCCESS,
        stories,
    }
}

export const getStoriesFail = (error) => {
    return {
        type: constants.GET_STORIES_FAIL,
        error,
    }
}