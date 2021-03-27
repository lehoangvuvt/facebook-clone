import { createSelector } from 'reselect';
import { initialState } from './reducer';

const homeState = (state) => state.home || initialState;

export const makeSelectorHome = createSelector(
    homeState,
    home => home
);

