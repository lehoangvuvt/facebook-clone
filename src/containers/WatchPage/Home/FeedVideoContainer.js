import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import LikeIcon from '../../../icon/fb-reaction-icon/like.png';
import LaughIcon from '../../../icon/fb-reaction-icon/laugh.png';
import LoveIcon from '../../../icon/fb-reaction-icon/love.png';
import SurpriseIcon from '../../../icon/fb-reaction-icon/surprise.png';
import SadIcon from '../../../icon/fb-reaction-icon/sad.png';
import AngryIcon from '../../../icon/fb-reaction-icon/angry.png';
import CareIcon from '../../../icon/fb-reaction-icon/care.png';
import LikeGif from '../../../icon/fb-reaction-gif/like.gif';
import LaughGif from '../../../icon/fb-reaction-gif/laugh.gif';
import LoveGif from '../../../icon/fb-reaction-gif/love.gif';
import SadGif from '../../../icon/fb-reaction-gif/sad.gif';
import CareGif from '../../../icon/fb-reaction-gif/care.gif';
import SurpriseGif from '../../../icon/fb-reaction-gif/surprise.gif';
import AngryGif from '../../../icon/fb-reaction-gif/angry.gif';

import { useHistory } from 'react-router';
import Tooltip from '../../../components/Tooltip';
import { setCurrentTooltip } from '../..//App/action';
import * as tooltipInfo from '../../../components/Tooltip/ToolTipInfo';

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentTooltip: (id, name) => { dispatch(setCurrentTooltip(id, name)) },
        dispatch
    }
}

const FeedVideoContainer = ({ videoId, title, username, date, reactions, comments, setCurrentTooltip }) => {
    const history = useHistory();
    const [src, setSrc] = useState(null);
    const [reactionsSet, setReactionsSet] = useState({
        like: { icon: LikeIcon, type: 1, amount: 0, users: [] },
        love: { icon: LoveIcon, type: 2, amount: 0, users: [] },
        laugh: { icon: LaughIcon, type: 3, amount: 0, users: [] },
        surprise: { icon: SurpriseIcon, type: 4, amount: 0, users: [] },
        sad: { icon: SadIcon, amount: 0, type: 5, users: [] },
        angry: { icon: AngryIcon, amount: 0, type: 6, users: [] },
        care: { icon: CareIcon, amount: 0, type: 7, users: [] }
    });
    const [isDisplayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        load(videoId);
        calculateReactions();
    }, [])

    const load = async (videoId) => {
        try {
            const s = await import(`../../../video/feeds/feed${videoId}.mp4`);
            setSrc(s.default);
        } catch (err) {
            console.log(err);
        }
    }

    const calculateReactions = () => {
        reactions.forEach((r, i) => {
            switch (r.type) {
                case 1:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        like: {
                            ...oldSet.like,
                            amount: oldSet.like.amount + 1,
                            users: [...oldSet.like.users, r.username]
                        }
                    }));
                    break;
                case 2:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        love: {
                            ...oldSet.love,
                            amount: oldSet.love.amount + 1,
                            users: [...oldSet.love.users, r.username]
                        }
                    }));
                    break;
                case 3:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        laugh: {
                            ...oldSet.laugh,
                            amount: oldSet.laugh.amount + 1,
                            users: [...oldSet.laugh.users, r.username]
                        }
                    }));
                    break;
                case 4:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        surprise: {
                            ...oldSet.surprise,
                            amount: oldSet.surprise.amount + 1,
                            users: [...oldSet.surprise.users, r.username]
                        }
                    }));
                    break;
                case 5:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        sad: {
                            ...oldSet.sad,
                            amount: oldSet.sad.amount + 1,
                            users: [...oldSet.sad.users, r.username]
                        }
                    }));
                    break;
                case 6:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        angry: {
                            ...oldSet.angry,
                            amount: oldSet.angry.amount + 1,
                            users: [...oldSet.angry.users, r.username]
                        }
                    }));
                    break;
                case 7:
                    setReactionsSet(oldSet => ({
                        ...oldSet,
                        care: {
                            ...oldSet.care,
                            amount: oldSet.care.amount + 1 * 100000,
                            users: [...oldSet.care.users, r.username]
                        }
                    }));
                    break;
                default:
                    break;
            }
        });
    }

    const calculateMost3ReactionsType = () => {
        const { like, love, laugh, surprise, sad, angry, care } = reactionsSet;
        let reactionsArr = [like, love, laugh, surprise, sad, angry, care];
        return reactionsArr.sort((a, b) => b.amount - a.amount).slice(0, 4);
    }

    const calculateTotalReactionsAmount = () => {
        const { like, love, laugh, surprise, sad, care, angry } = reactionsSet;
        let totalAmount = like.amount + love.amount + laugh.amount + surprise.amount + sad.amount + care.amount + angry.amount;
        let numOfPer1000 = 0;
        let textTail = '';
        if (totalAmount >= 1000) {
            do {
                totalAmount = divideBy1000(totalAmount);
                numOfPer1000 = numOfPer1000 + 1;
            } while (totalAmount >= 1000);

            switch (numOfPer1000) {
                case 1:
                    textTail = 'k';
                    break;
                case 2:
                    textTail = 'M'
                    break;
                case 3:
                    textTail = "B";
                    break;
                default:
                    textTail = '';
            }
        }
        return totalAmount + textTail;
    }

    const divideBy1000 = (input) => {
        return Math.round(input / 1000);
    }

    const toggleModal = (value) => {
        setDisplayModal(value);
    }

    const toggleToolTip = (id, name) => {
        setCurrentTooltip(id, name);
    }

    return (
        <div className="watch-page__main-content__video-container">
            <div className="watch-page__main-content__video-container__header">
                <div className="watch-page__main-content__video-container__header__avatar">
                    <div style={{ backgroundImage: 'url("https://www.abc.net.au/cm/rimage/3657354-1x1-large.jpg?v=21")' }}></div>
                </div>
                <div className="watch-page__main-content__video-container__header__user-date">
                    <div className="watch-page__main-content__video-container__header__user-date__user">
                        <p>Hội hâm mộ nhạc US-UK</p>
                    </div>
                    <div className="watch-page__main-content__video-container__header__user-date__date">
                        <p>{date}</p>
                    </div>
                </div>
                <div className="watch-page__main-content__video-container__header__option">

                </div>
            </div>
            <div className="watch-page__main-content__video-container__body">
                <div className="watch-page__main-content__video-container__body__title">
                    <p>{title}</p>
                </div>
                <div className="watch-page__main-content__video-container__body__video">
                    <video className="watch-page__main-content__video-container__body__video__video-player"
                        controls
                        src={src}>
                    </video>
                </div>
            </div>
            <div className="watch-page__main-content__video-container__footer">
                <div className="watch-page__main-content__video-container__footer__options">
                    <div
                        onMouseEnter={() => { toggleModal(true) }}
                        onMouseLeave={() => { toggleModal(false) }}
                        className="watch-page__main-content__video-container__footer__options__option">
                        <i class='bx bx-like'></i> <p>Like</p>
                    </div>
                    <div className="watch-page__main-content__video-container__footer__options__option">
                        <i class='bx bx-comment'></i> <p>Comment</p>
                    </div>
                    <div className="watch-page__main-content__video-container__footer__options__option">
                        <i style={{ transform: 'scaleX(-1)' }} class='bx bx-share'></i> <p>Share</p>
                    </div>
                </div>
                <div className="watch-page__main-content__video-container__footer__reactions">
                    <div className="watch-page__main-content__video-container__footer__reactions__icons">
                        {calculateMost3ReactionsType().map(r => r.amount > 0 ? <div><img src={r.icon} /></div> : null)}
                    </div>
                    <div className="watch-page__main-content__video-container__footer__reactions__total">
                        <p>{calculateTotalReactionsAmount()}</p>
                    </div>
                </div>
                <div className="watch-page__main-content__video-container__footer__comments">
                </div>
            </div>
            <div
                onMouseEnter={() => { toggleModal(true) }}
                onMouseLeave={() => { toggleModal(false) }}
                style={{ transform: isDisplayModal ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'bottom', opacity: isDisplayModal ? '1' : '0' }}
                className="watch-page__main-content__video-container__reaction-modal">
                <div
                    onMouseEnter={() => { toggleToolTip(tooltipInfo.LIKE_TOOLTIP.id, tooltipInfo.LIKE_TOOLTIP.name) }}
                    onMouseLeave={() => { toggleToolTip(0, null) }}
                    className="watch-page__main-content__video-container__reaction-modal__reaction">
                    <Tooltip id={1} />
                    <img src={LikeGif} />
                </div>
                <div
                    onMouseEnter={() => { toggleToolTip(tooltipInfo.LOVE_TOOLTIP.id, tooltipInfo.LOVE_TOOLTIP.name) }}
                    onMouseLeave={() => { toggleToolTip(0, null) }}
                    className="watch-page__main-content__video-container__reaction-modal__reaction">
                    <Tooltip id={2} />
                    <img src={LoveGif} />
                </div>
                <div
                    onMouseEnter={() => { toggleToolTip(tooltipInfo.LAUGH_TOOLTIP.id, tooltipInfo.LAUGH_TOOLTIP.name) }}
                    onMouseLeave={() => { toggleToolTip(0, null) }}
                    className="watch-page__main-content__video-container__reaction-modal__reaction">
                    <Tooltip id={3} />
                    <img src={LaughGif} />
                </div>
                <div
                    onMouseEnter={() => { toggleToolTip(tooltipInfo.SURPRISE_TOOLTIP.id, tooltipInfo.SURPRISE_TOOLTIP.name) }}
                    onMouseLeave={() => { toggleToolTip(0, null) }}
                    className="watch-page__main-content__video-container__reaction-modal__reaction">
                    <Tooltip id={4} />
                    <img src={SurpriseGif} />
                </div>
                <div
                    onMouseEnter={() => { toggleToolTip(tooltipInfo.SAD_TOOLTIP.id, tooltipInfo.SAD_TOOLTIP.name) }}
                    onMouseLeave={() => { toggleToolTip(0, null) }}
                    className="watch-page__main-content__video-container__reaction-modal__reaction">
                    <Tooltip id={5} />
                    <img src={SadGif} />
                </div>
                <div
                    onMouseEnter={() => { toggleToolTip(tooltipInfo.ANGRY_TOOLTIP.id, tooltipInfo.ANGRY_TOOLTIP.name) }}
                    onMouseLeave={() => { toggleToolTip(0, null) }}
                    className="watch-page__main-content__video-container__reaction-modal__reaction">
                    <Tooltip id={6} />
                    <img src={AngryGif} />
                </div>
            </div>
        </div>
    )
}

FeedVideoContainer.propTypes = {
    videoId: PropTypes.number,
    title: PropTypes.string,
    username: PropTypes.string,
    date: PropTypes.string,
    reactions: PropTypes.array,
    comments: PropTypes.array,
    setCurrentTooltip: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(FeedVideoContainer);