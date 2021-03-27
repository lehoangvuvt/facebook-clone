import { put, delay, takeLatest, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from '../../constants/constants';
import { shows } from '../../data/dummyShowsData';
import * as api from '../../api/api';

function* getAllShows({ page }) {
    try {
        const results = yield call(api.getTrendingMovieWeekly, page);
        let moviesList = [];
        if (results.data.results && results.data.results.length > 0) {
            results.data.results.forEach(m => {
                const image = "http://image.tmdb.org/t/p/original" + m.poster_path;
                const backdropImage = "http://image.tmdb.org/t/p/original" + m.backdrop_path;
                const movie = {
                    name: m.name,
                    id: m.id,
                    image: image,
                    backdropImage: backdropImage,
                    info: { summary: m.overview, country: m.origin_country, language: m.original_language },
                    popularity: m.popularity,
                    rating: m.vote_average
                };
                moviesList.push(movie);
            });
        }
        yield put(actions.getAllShowsSuccess(moviesList));
    } catch (error) {
        yield put(actions.getAllShowsError(error));
    }
}

function* getFeaturedShow() {
    try {
        const results = yield call(api.getFeaturedShow);
        const m = results.data.results[2];
        const image = "http://image.tmdb.org/t/p/original" + m.poster_path;
        const backdropImage = "http://image.tmdb.org/t/p/original" + m.backdrop_path;
        const movie = {
            name: m.name,
            id: m.id,
            image: image,
            backdropImage: backdropImage,
            info: { summary: m.overview, country: m.origin_country, language: m.original_language },
            popularity: m.popularity,
            rating: m.vote_average
        };
        yield put(actions.getFeaturedShowSuccess(movie));
    } catch (error) {
        yield put(actions.getFeaturedShowFail(error));
    }
}

function* getModalInfo({ id, name, info, position, trailer }) {
    try {
        if (trailer === null) {
            const response = yield call(api.getTrailer, id);
            trailer = response.data.results[0].key;
        }
        yield put(actions.getModalInfoSuccess(id, name, info, trailer, position))
    } catch (error) {
        yield put(actions.getModalInfoSuccess(id, name, info, null, position))
    }
}

export default function* watchReducer() {
    yield takeLatest(constants.GET_ALL_SHOWS, getAllShows);
    yield takeLatest(constants.GET_FEATURED_SHOW, getFeaturedShow);
    yield takeLatest(constants.GET_MODAL_INFO, getModalInfo);
}