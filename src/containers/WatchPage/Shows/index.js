import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import './style.scss';
import FeedVideoContainer from '../Home/FeedVideoContainer';
import FeaturedHeader from './FeaturedHeader';
import MoviesList from './MoviesList';
import Modal from './Modal';


const Shows = () => {
    const history = useHistory();

    return (
        <div className="watch-page__main-content">
            <div className="watch-page__main-content__shows-container">
                <FeaturedHeader
                    name={"Ozark: Story of a good man"}
                    bannerImage={"https://media.vanityfair.com/photos/5e7913f8ac720b00089fcfad/master/pass/ozark-season-3-review.jpg"}
                    link={""}
                />
                <MoviesList />
            </div>
            <Modal />
        </div>
    )
}

export default Shows;