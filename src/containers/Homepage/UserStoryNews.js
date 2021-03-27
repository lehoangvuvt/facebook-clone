import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StoryNew from './StoryNew';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import './style.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border:5px inset #3498db;
`;

const UserStoryNews = ({ getStories, getStoriesObject, getStoriesInfo, storiesInfo }) => {
    const { stories, isLoading, error, range } = getStoriesObject;

    useEffect(() => {
        getStories();
    }, []);

    return (
        <div className='homepage__news-feed__story-news'>
            {
                isLoading ?
                    <ClipLoader color={"#3498db"} loading={isLoading} css={override} size={20} />
                    :
                    stories.length > 0 && !error && !isLoading ?
                        stories.map((story, i) => <StoryNew key={i} user={story.user} time={story.time} avatar={story.avatar} getStoriesInfo={getStoriesInfo} storiesInfoState={storiesInfo} />)
                        :
                        null
            }
            {stories.length > 5 && !error && !isLoading ?
                <div className='homepage__news-feed__story-news__story'>
                    <i title="See all stories"
                        class="fas fa-chevron-circle-right"></i>
                </div>
                : null}
        </div>
    )
}

UserStoryNews.propTypes = {
    getStories: PropTypes.func,
    getStoriesObject: PropTypes.object,
    getStoriesInfo: PropTypes.func,
    storiesInfo: PropTypes.object,
};

export default UserStoryNews;