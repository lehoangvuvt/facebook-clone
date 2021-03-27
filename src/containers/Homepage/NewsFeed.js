import React from 'react';
import Feed from './Feed';
import './style.scss';
import PropTypes from 'prop-types';
import UserStoryNews from './UserStoryNews';
import NewStatus from './NewStatus';
import CreatePostModal from './CreatePostModal';

const NewsFeed = ({ getStories, getStoriesObject, getStoriesInfo, storiesInfo }) => {
    return (
        <div className="homepage__news-feed">
            <UserStoryNews getStories={getStories} getStoriesObject={getStoriesObject} getStoriesInfo={getStoriesInfo} storiesInfo={storiesInfo} />
            <NewStatus />
            <CreatePostModal />
            <Feed
                avatar={"https://scr.vn/wp-content/uploads/2020/08/Nh%C3%B3c-Maruko-d%E1%BB%85-th%C6%B0%C6%A1ng-1024x1024.jpeg"}
                author={"Ngô Quang Vinh"}
                time={11}
                image={"https://scontent-hkt1-2.xx.fbcdn.net/v/t1.0-9/159779973_489086652118556_5510207168245498416_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=825194&_nc_ohc=tmu2yGaz77wAX9v58QW&_nc_ht=scontent-hkt1-2.xx&oh=e7a77167f4a08f5cbc382cfd654aca51&oe=60700E8C"}
                body={"Mình mới chơi hơn 2 tháng rune còn yếu, xin mọi người giúp xây 1 team đi auto rồng 11, dc rồng 12 thì càng tốt. Xin mọi người xây hộ team rta. Xin team đi toa nomal 100 tầng luôn. Với lại em thấy mọi người bảo là team  ss nước lửa đi muôn nơi.  Sao mình thấy chị em nước lửa hơi yếu. Chắc do rune cùi. Xin địa bàn hoạt động của chị  em luôn. Thank mọi người. Mong ad duyệt bài."} />
        </div>
    )
}

NewsFeed.prototype = {
    getStories: PropTypes.func,
    getStoriesObject: PropTypes.object,
    getStoriesInfo: PropTypes.func,
    storiesInfo: PropTypes.object,
}

export default NewsFeed;