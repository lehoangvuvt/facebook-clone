import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Feed = ({ avatar, author, time, body, image }) => {
    return (
        <div className="homepage__news-feed__feed">
            <div className="homepage__news-feed__feed__header">
                <div className="homepage__news-feed__feed__header__avatar">
                    <img src={avatar} />
                </div>
                <div className="homepage__news-feed__feed__header__center-section">
                    <div className="homepage__news-feed__feed__header__center-section__author">
                        {author}
                    </div>
                    <div className="homepage__news-feed__feed__header__center-section__time">
                        {time}h
                    </div>
                </div>
                <div className="homepage__news-feed__feed__header__option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div className="homepage__news-feed__feed__body">
                <div className="homepage__news-feed__feed__body__text">
                    <p>{body.substring(0, 300).trim()}... See more</p>
                </div>
                <div className="homepage__news-feed__feed__body__image">
                    <img src={image} />
                </div>
            </div>
            <div className="homepage__news-feed__feed__footer">
                <h3>Footer</h3>
            </div>
        </div>
    )
}

Feed.propTypes = {
    avatar: PropTypes.string,
    author: PropTypes.string,
    time: PropTypes.number,
    body: PropTypes.string,
    image: PropTypes.string,
}

export default Feed;