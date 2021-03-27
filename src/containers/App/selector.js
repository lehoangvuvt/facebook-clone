import { createSelector } from 'reselect';
import { initialState } from './reducer';

const globalState = (state) => state.global || initialState;

export const makeSelectorGlobal = createSelector(
    globalState,
    global => global
);

