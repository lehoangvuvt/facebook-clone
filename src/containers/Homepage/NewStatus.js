import React from 'react';
import CreatePostModal from './CreatePostModal';
import './style.scss';

const NewStatus = () => {
    return (
        <div className="homepage__news-feed__new-status">
            <div className="homepage__news-feed__new-status__top">
                <div className="homepage__news-feed__new-status__top__avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div className="homepage__news-feed__new-status__top__input">
                    <input type="text" placeholder="What's on your mind?" disabled />
                </div>
            </div>
            <div className="homepage__news-feed__new-status__bottom">
                <div className="homepage__news-feed__new-status__bottom__option">
                    <i class="fas fa-video"></i>
                    <p>Live Video</p>
                </div>
                <div className="homepage__news-feed__new-status__bottom__option">
                    <i class="fas fa-images"></i>
                    <p>Photo/Video</p>
                </div>
                <div className="homepage__news-feed__new-status__bottom__option">
                    <i class="far fa-laugh"></i>
                    <p>Feeling/Activity</p>
                </div>
            </div>
            <CreatePostModal />
        </div>
    )
}

export default NewStatus;