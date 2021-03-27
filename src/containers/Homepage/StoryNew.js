import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useHistory } from 'react-router';

const StoryNew = ({ avatar, user, time, getStoriesInfo, storiesInfoState }) => {
    const [isClicked, setClicked] = useState(false);
    const { isLoading, storiesInfo, error, username } = storiesInfoState.getStoriesInfo;
    const history = useHistory();

    function onClick() {
        setClicked(true);
        getStoriesInfo(user);
    }

    useEffect(() => {
        if (!isLoading && storiesInfo.length > 0 && !error && isClicked) {
            if (user === username) {
                setClicked(false);
                setTimeout(() => {
                    history.push(`/story/${user}/${storiesInfo[0].id}/0`);
                }, 500);
            }
        }
    }, [storiesInfo])

    return (
        <div className='homepage__news-feed__story-news__story'>
            <div
                className='homepage__news-feed__story-news__story__avatar'
                style={{ backgroundImage: `url(${avatar})` }}>
            </div>
            <div
                title={"Click to view " + user + " story"}
                onClick={() => { onClick() }}
                className={isClicked ? "homepage__news-feed__story-news__story__background homepage__news-feed__story-news__story__background--animated" : "homepage__news-feed__story-news__story__background"}>
            </div>
        </div>
    )
}

StoryNew.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.string,
    time: PropTypes.number,
    getStoriesInfo: PropTypes.func,
    storiesInfoState: PropTypes.object,
}

export default StoryNew;