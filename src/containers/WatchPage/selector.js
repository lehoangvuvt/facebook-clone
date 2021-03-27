import { createSelector } from 'reselect';
import { initialState } from './reducer';

const watchState = (state) => state.watch || initialState;

export const makeSelectorWatch = createSelector(
    watchState,
    watch => watch
);