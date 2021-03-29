import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import './style.scss';
import '../style.scss';
import FeedVideoContainer from './FeedVideoContainer';

const Home = () => {
    const history = useHistory();
    const reactions = [
        {
            type: 1,
            username: 'phuong123'
        },
        {
            type: 2,
            username: '"lamtay321'
        },
        {
            type: 7,
            username: 'trhip111'
        },
    ];

    const reactions2 = [
        {
            type: 1,
            username: 'phuong123'
        },
        {
            type: 1,
            username: '"lamtay321'
        },
        {
            type: 1,
            username: 'trhip111'
        },
        {
            type: 2,
            username: 'anht133'
        },
        {
            type: 5,
            username: "toan333"
        },
        {
            type: 5,
            username: "leenguyen"
        }
    ];

    return (
        <div className="watch-page__main-content">
            <FeedVideoContainer
                videoId={1}
                title={"Một bài hát tình cảm Eric Clapton viết tặng con trai đã mất của ông"}
                username={"phuong123"}
                date={"March 16 at 12:00 PM "}
                reactions={reactions}
            />
        </div>
    )
}

export default Home;