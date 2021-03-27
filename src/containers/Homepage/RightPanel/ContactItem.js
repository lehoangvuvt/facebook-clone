import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ContactItem = ({ username, avatar, name, status, time, toggleOnModal, toggleOffModal, openChatBox }) => {

    function onMouseEnter(e) {
        const rect = e.target.getBoundingClientRect();
        const top = rect.top;
        toggleOnModal(top, username, avatar, name, status);
    }

    function onMouseLeave() {
        toggleOffModal();
    }

    function onClick() {
        openChatBox({ username, avatar, name });
    }

    return (
        <div
            onClick={() => { onClick() }}
            onMouseEnter={(e) => { onMouseEnter(e) }}
            onMouseLeave={() => { onMouseLeave() }}
            className="right-panel__contacts-section__contacts-container__contact">
            <div className="right-panel__contacts-section__contacts-container__contact__avatar">
                <div className="right-panel__contacts-section__contacts-container__contact__avatar__circle">
                    <img src={avatar} />
                </div>
                {status && time === 0 ?
                    <div className="right-panel__contacts-section__contacts-container__contact__avatar__status">
                    </div>
                    :
                    !status && time > 0 ?
                        <div className="right-panel__contacts-section__contacts-container__contact__avatar__status right-panel__contacts-section__contacts-container__contact__avatar__status--offline">
                            {time}
                        </div>
                        :
                        null
                }
            </div>
            <div className="right-panel__contacts-section__contacts-container__contact__name">
                <p>{name}</p>
            </div>
        </div>
    )
}

ContactItem.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool,
    time: PropTypes.number,
    toggleOnModal: PropTypes.func,
    toggleOffModal: PropTypes.func,
    openChatBox: PropTypes.func,
}

export default ContactItem;