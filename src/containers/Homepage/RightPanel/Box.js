import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'boxicons';
import './style.scss';

const Box = ({ box, closeChatBox }) => {
    const [msg, setMsg] = useState('');

    function closeBox(username) {
        closeChatBox(username);
    }

    function onChange(e) {
        const value = e.target.value;
        setMsg(value);
    }

    return (
        <div className="chat-box-container__chat-box">
            <div className="chat-box-container__chat-box__header">
                <div className="chat-box-container__chat-box__header__avatar-name-status">
                    <div className="chat-box-container__chat-box__header__avatar-name-status__avatar">
                        <div className="chat-box-container__chat-box__header__avatar-name-status__avatar__circle">
                            <img src={box.avatar} />
                        </div>
                    </div>
                    <div className="chat-box-container__chat-box__header__avatar-name-status__name-and-status">
                        <div className="chat-box-container__chat-box__header__avatar-name-status__name-and-status__name">
                            <div className="chat-box-container__chat-box__header__avatar-name-status__name-and-status__name__text">
                                {box.name.length > 15 ?
                                    < p > {box.name.substring(0, 12)} ...</p>
                                    :
                                    < p > {box.name}</p>
                                }
                            </div>
                            <div className="chat-box-container__chat-box__header__avatar-name-status__name-and-status__name__icon">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="chat-box-container__chat-box__header__avatar-name-status__name-and-status__status">
                            <p>Active Now</p>
                        </div>
                    </div>
                </div>
                <div className="chat-box-container__chat-box__header__right">
                    <div className="chat-box-container__chat-box__header__right__option">
                        <i class="fas fa-video"></i>
                    </div>
                    <div className="chat-box-container__chat-box__header__right__option">
                        <i class="fas fa-phone-volume"></i>
                    </div>
                    <div className="chat-box-container__chat-box__header__right__option">
                        <i class="fas fa-minus"></i>
                    </div>
                    <div onClick={() => { closeBox(box.username) }} className="chat-box-container__chat-box__header__right__option">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <div className="chat-box-container__chat-box__body">

            </div>
            <div className="chat-box-container__chat-box__footer">
                <div
                    style={{ width: msg.length === 0 ? '40%' : '10%' }}
                    className="chat-box-container__chat-box__footer__left">
                    <div
                        style={{ width: msg.length === 0 ? '25%' : '100%' }}
                        className="chat-box-container__chat-box__footer__left__option">
                        <i class='bx bxs-plus-circle'></i>
                    </div>
                    <div
                        style={{ width: msg.length === 0 ? '25%' : '0' }}
                        className="chat-box-container__chat-box__footer__left__option">
                        <i class='bx bx-images' ></i>
                    </div>
                    <div
                        style={{ width: msg.length === 0 ? '25px' : '0' }}
                        className="chat-box-container__chat-box__footer__left__option">
                        <i class='bx bxs-ghost'></i>
                    </div>
                    <div
                        style={{ width: msg.length === 0 ? '25%' : '0' }}
                        className="chat-box-container__chat-box__footer__left__option">
                        <i class='bx bxs-file-gif'></i>
                    </div>
                </div>
                <div
                    style={{ width: msg.length === 0 ? "50%" : "80%" }}
                    className="chat-box-container__chat-box__footer__center">
                    <div className="chat-box-container__chat-box__footer__center__input">
                        <div className="chat-box-container__chat-box__footer__center__input__container">
                            <input
                                style={{ width: msg.length === 0 ? "70%" : "81%" }}
                                value={msg}
                                className="chat-box-container__chat-box__footer__center__input__container__input"
                                onChange={(e) => onChange(e)} placeholder="Aa" />
                            <i class="fas fa-smile"></i>
                        </div>
                    </div>
                </div>
                <div className="chat-box-container__chat-box__footer__right">
                    <i class='bx bxs-like'></i>
                </div>
            </div>
        </div >
    )
}

Box.propTypes = {
    box: PropTypes.object,
    closeChatBox: PropTypes.func,
}

export default Box;