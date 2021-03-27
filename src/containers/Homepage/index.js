import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { createStructuredSelector } from 'reselect';
import { makeSelectorHome } from './selector';
import { connect } from 'react-redux';
import { getContacts, toggleOnModal, toggleOffModal, openChatBox, closeChatBox, getStories } from './action';
import { getStoriesInfo } from '../StoryDetails/action';
import NewsFeed from './NewsFeed';
import './style.scss';
import { makeSelectorStoriesInfo } from '../StoryDetails/selector';

const mapStateToProps = createStructuredSelector({
    home: makeSelectorHome,
    storiesInfo: makeSelectorStoriesInfo,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => { dispatch(getContacts()) },
        toggleOnModal: (top, username, name, avatar, status) => { dispatch(toggleOnModal(top, username, name, avatar, status)) },
        toggleOffModal: () => { dispatch(toggleOffModal()) },
        openChatBox: (payload) => { dispatch(openChatBox(payload)) },
        closeChatBox: (username) => { dispatch(closeChatBox(username)) },
        getStories: () => { dispatch(getStories()) },
        getStoriesInfo: (username) => { dispatch(getStoriesInfo(username)) },
        dispatch
    }
}

const Homepage = ({ home, getContacts, toggleOnModal, toggleOffModal, openChatBox, closeChatBox, getStories, getStoriesInfo, storiesInfo }) => {

    return (
        <>
            <div className="homepage">
                <LeftPanel />
                <NewsFeed getStories={getStories} getStoriesObject={home.getStories} getStoriesInfo={getStoriesInfo} storiesInfo={storiesInfo} />
                <RightPanel
                    home={home}
                    toggleOnModal={toggleOnModal}
                    toggleOffModal={toggleOffModal}
                    openChatBox={openChatBox}
                    closeChatBox={closeChatBox}
                    getContacts={getContacts}
                />
            </div>
        </>
    )
}

Homepage.propTypes = {
    home: PropTypes.object,
    getContacts: PropTypes.func,
    toggleOnModal: PropTypes.func,
    toggleOffModal: PropTypes.func,
    openChatBox: PropTypes.func,
    closeChatBox: PropTypes.func,
    getStories: PropTypes.func,
    getStoriesInfo: PropTypes.func,
    storiesInfo: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);