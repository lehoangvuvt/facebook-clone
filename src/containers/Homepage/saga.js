import { put, delay, call, takeLatest, take } from 'redux-saga/effects';
import * as actions from './action';
import { contacts } from '../../data/dummyContacts';
import { stories } from '../../data/dummyStories';
import * as constants from '../../constants/constants';

function* getContacts() {
    try {
        const response = contacts;
        yield delay(2000);
        yield put(actions.getContactsSuccess(response));
    } catch (error) {
        yield put(actions.getContactsFail(error));
    }
}

function* getStories() {
    try {
        const response = stories.sort((a, b) => a.time - b.time);
        yield delay(2000);
        yield put(actions.getStoriesSuccess(response));
    } catch (error) {
        yield put(actions.getStoriesFail(error));
    }
}

export default function* homeSaga() {
    yield takeLatest(constants.GET_CONTACTS, getContacts);
    yield takeLatest(constants.GET_STORIES, getStories);
}