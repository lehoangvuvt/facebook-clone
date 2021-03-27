import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { makeSelectorStoriesInfo } from './selector';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import './style.scss';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
    storiesInfoState: makeSelectorStoriesInfo,
})

const StoryDetails = ({ storiesInfoState }) => {
    const stories = storiesInfoState.getStoriesInfo.storiesInfo;
    const [src, setSrc] = useState(null);
    const [currentStory, setCurrentStory] = useState(0);
    const [isPaused, setPaused] = useState(false);
    const history = useHistory();
    const [isMuted, setMuted] = useState(true);
    const [currentBarWidth, setCurrentBarWidth] = useState(0);
    const { id, index } = useParams();
    const videoRef = React.useRef();

    useEffect(() => {
        load(id);
        setCurrentStory(parseInt(index));
    })

    const load = async (id) => {
        try {
            const s = await import(`../../video/stories/${id}.mp4`);
            setSrc(s.default);
        } catch (err) {
            history.push('/');
        }
    }

    const play = () => {
        setPaused(false);
        videoRef.current.play();
    }

    const pause = () => {
        setPaused(true);
        videoRef.current.pause();
    }

    const muted = () => {
        setMuted(true);
    }
    const unmuted = () => {
        setMuted(false);
    }

    const handleTimeUpdated = () => {
        const currentBarWidth = videoRef.current.currentTime / videoRef.current.duration * 100;
        setCurrentBarWidth(currentBarWidth);
        if (currentBarWidth === 100) {
            if (currentStory < stories.length - 1) {
                const username = storiesInfoState.getStoriesInfo.username;
                const nextStoryId = storiesInfoState.getStoriesInfo.storiesInfo[currentStory + 1].id;
                setCurrentBarWidth(0);
                history.push(`/story/${username}/${nextStoryId}/${currentStory + 1}`);
            } else {
                history.push('/');
            }
        }
    }

    return (
        <div className="story-details-container">
            <div className="story-details-container__left">

            </div>
            <div className="story-details-container__center">
                <div className="story-details-container__center__player-container">
                    <div className="story-details-container__center__player-container__progress-bar">
                        {stories.map((story, i) =>
                            i === currentStory ?
                                <div className="story-details-container__center__player-container__progress-bar__duration-bar">
                                    <div
                                        style={{ width: `${currentBarWidth}%` }}
                                        className="story-details-container__center__player-container__progress-bar__duration-bar__current-time-bar">
                                    </div>
                                </div>
                                :
                                i < currentStory ?
                                    <div className="story-details-container__center__player-container__progress-bar__duration-bar">
                                        <div
                                            style={{ width: `100%` }}
                                            className="story-details-container__center__player-container__progress-bar__duration-bar__current-time-bar">
                                        </div>
                                    </div>
                                    :
                                    <div className="story-details-container__center__player-container__progress-bar__duration-bar">
                                    </div>
                        )}
                    </div>
                    <div className="story-details-container__center__player-container__controls">
                        <div className="story-details-container__center__player-container__controls__btn">
                            {!isPaused ?
                                <i onClick={() => { pause() }} class="fas fa-pause"></i>
                                :
                                <i onClick={() => { play() }} class="fas fa-play"></i>
                            }
                        </div>
                        <div className="story-details-container__center__player-container__controls__btn">
                            {isMuted ?
                                <i onClick={() => { unmuted() }} class="fas fa-volume-mute"></i>
                                :
                                <i onClick={() => { muted() }} class="fas fa-volume-up"></i>
                            }
                        </div>
                        <div className="story-details-container__center__player-container__controls__btn">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <video
                        ref={videoRef}
                        src={src}
                        autoPlay={true}
                        muted={isMuted}
                        onTimeUpdate={handleTimeUpdated}
                        className="story-details-container__center__player-container__player">
                    </video>
                    <div className="story-details-container__center__player-container__reply-section">
                        <input type="text" placeholder={"Trả lời " + storiesInfoState.getStoriesInfo.username} />
                    </div>
                </div>
            </div>
            <div className="story-details-container__right">

            </div>
        </div>
    )
}

StoryDetails.propTypes = {
    storiesInfoState: PropTypes.object,
}

export default connect(mapStateToProps)(StoryDetails);