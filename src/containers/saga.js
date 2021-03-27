import { all, spawn } from 'redux-saga/effects';
import homeSaga from './Homepage/saga';
import storyDetailsSaga from './StoryDetails/saga';
import watchSaga from './WatchPage/saga';


export default function* rootSaga() {
    yield spawn(homeSaga);
    yield spawn(storyDetailsSaga);
    yield spawn(watchSaga);
}