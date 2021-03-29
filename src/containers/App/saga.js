import { put, delay, call, takeLatest, take } from 'redux-saga/effects';
import * as actions from './action';
import { historySearch } from '../../data/dummyHistorySearch';
import * as constants from '../../constants/constants';

function* getSearchHistory() {
    try {
        const results = historySearch;
        yield put(actions.getSearchHistorySuccess(results));
    } catch (error) {
        yield put(actions.getSearchHistoryFail(error));
    }
}

export default function* appSaga() {
    yield takeLatest(constants.GET_SEARCH_HISTORY, getSearchHistory);
}