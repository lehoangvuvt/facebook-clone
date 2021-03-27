import * as constants from '../../constants/constants';

export const initialState = {
    centerMenuOption: 1,
    currentToolTip: {
        id: 0,
        name: null,
    }
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
        default:
            return state;
    }
}