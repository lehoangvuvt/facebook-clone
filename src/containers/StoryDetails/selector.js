import { createSelector } from 'reselect';
import { initialState } from './reducer.js';

const storiesInfoState = (state) => state.storiesInfo || initialState;

export const makeSelectorStoriesInfo = createSelector(
    storiesInfoState,
    storiesInfo => storiesInfo
);

