import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useHistory } from 'react-router';

const LeftPanel = ({ username, avatar }) => {
    const history = useHistory();

    function redirect(path) {
        history.push(path);
    }

    return (
        <div className="left-panel">
            <div className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div className="left-panel__item__name">
                    Le Hoang Vu
                </div>
            </div>
            <div
                onClick={() => { redirect('/friends') }}
                className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-user-friends"></i>
                </div>
                <div className="left-panel__item__name">
                    Friends
                </div>
            </div>
            <div
                onClick={() => { redirect('/marketplace') }}
                className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-store"></i>
                </div>
                <div className="left-panel__item__name">
                    Marketplace
                </div>
            </div>
            <div className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-users"></i>
                </div>
                <div
                    onClick={() => { redirect('/groups/feed') }}
                    className="left-panel__item__name">
                    Groups
                </div>
            </div>
            <div
                onClick={() => { redirect('/watch') }}
                className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-tv"></i>
                </div>
                <div className="left-panel__item__name">
                    Watch
                </div>
            </div>
            <div className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="far fa-calendar-alt"></i>
                </div>
                <div className="left-panel__item__name">
                    Events
                </div>
            </div>
            <div className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-history"></i>
                </div>
                <div className="left-panel__item__name">
                    Memories
                </div>
            </div>
            <div className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-bookmark"></i>
                </div>
                <div className="left-panel__item__name">
                    Saved
                </div>
            </div>
            <div className="left-panel__item">
                <div className="left-panel__item__icon">
                    <i class="fas fa-chevron-circle-down"></i>
                </div>
                <div className="left-panel__item__name">
                    See More
                </div>
            </div>
        </div>
    )
}

LeftPanel.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
}

export default LeftPanel;