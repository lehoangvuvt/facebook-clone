import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getAllShows, loadMore, resetPage } from '../actions';
import './style.scss';
import Movie from './Movie';
import { makeSelectorWatch } from '../selector';
import { cancel } from '@redux-saga/core/effects';

const mapStateToProps = createStructuredSelector({
    watchState: makeSelectorWatch,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getAllShows: (page) => { dispatch(getAllShows(page)) },
        loadMore: () => { dispatch(loadMore()) },
        resetPage: () => { dispatch(resetPage()) },
        dispatch
    }
}

const MoviesList = ({ getAllShows, watchState, loadMore, resetPage }) => {
    const { isLoading, shows, error, page } = watchState.getAllShows;
    const [currentPage, setCurrentPage] = useState(1);
    const observer = useRef();
    const lastElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && currentPage < 3) {
                load();
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading])

    useEffect(() => {
        getAllShows(currentPage);
    }, [currentPage])

    useEffect(() => {
        resetPage();
    }, [])

    const scrollToBottom = () => {
        const listDiv = document.getElementsByClassName('watch-page__main-content__shows-container__movies-list-container__list')[0];
        listDiv.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const load = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

    return (
        <div className="watch-page__main-content__shows-container__movies-list-container">
            <div className="watch-page__main-content__shows-container__movies-list-container__header">
                <p>Facebook Originals</p>
            </div>
            <div className="watch-page__main-content__shows-container__movies-list-container__list">
                {shows && shows.length > 0 && !isLoading && !error ?
                    shows.map((show, i) =>
                        (i + 1) === shows.length ?
                            <Movie
                                ref={lastElementRef}
                                key={i}
                                id={show.id}
                                image={show.image}
                                popularity={show.popularity}
                                rating={show.rating}
                                name={show.name}
                                info={show.info}
                            />
                            :
                            <Movie
                                key={i}
                                id={show.id}
                                image={show.image}
                                popularity={show.popularity}
                                rating={show.rating}
                                name={show.name}
                                info={show.info}
                            />
                    )
                    :
                    <p style={{ color: 'white' }}> Loading...</p>
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);