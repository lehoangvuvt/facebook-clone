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