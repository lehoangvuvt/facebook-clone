import { put, call, delay, takeLatest } from 'redux-saga/effects';
import { storiesInfo } from '../../data/dummyStoriesInfo';
import * as constants from '../../constants/constants';
import * as actions from './action';

function* getStoriesInfo({ username }) {
    try {
        const response = storiesInfo.filter(story => story.username === username);
        yield delay(5000);
        yield put(actions.getStoriesInfoSuccess(response));
    } catch (err) {
        yield put(actions.getStoriesInfoFail(err));
    }
}

export default function* storyDetailsSaga() {
    yield takeLatest(constants.GET_STORIES_INFO, getStoriesInfo);
}