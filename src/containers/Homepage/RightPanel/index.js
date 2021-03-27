import React, { useEffect } from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import './style.scss';
import Modal from './Modal';
import ChatBoxes from './ChatBoxes';

const override = css`
  display: block;
  margin: 0 auto;
  border:5px inset #3498db;
`;

const RightPanel = ({ home, toggleOffModal, toggleOnModal, openChatBox, closeChatBox, getContacts }) => {
    const contacts = home.getContacts.contacts;
    const isLoading = home.getContacts.isLoading;
    const error = home.getContacts.error;
    const boxes = home.openChatBox.boxes;

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <>
            <div className="right-panel">
                <div className="right-panel__contacts-section">
                    <div className="right-panel__contacts-section__header">
                        <div className="right-panel__contacts-section__header__title">
                            <p>Contacts</p>
                        </div>
                        <div className="right-panel__contacts-section__header__buttons">

                        </div>
                    </div>
                    <div className="right-panel__contacts-section__contacts-container">
                        {isLoading ?
                            <ClipLoader color={"#3498db"} loading={isLoading} css={override} size={20} />
                            :
                            contacts.length > 0 && !isLoading && !error ?
                                contacts.map((contact, i) => <ContactItem
                                    key={i}
                                    avatar={contact.avatar}
                                    status={contact.status}
                                    time={contact.time}
                                    name={contact.name}
                                    username={contact.username}
                                    toggleOffModal={toggleOffModal}
                                    toggleOnModal={toggleOnModal}
                                    openChatBox={openChatBox}
                                />)
                                :
                                null
                        }
                    </div>
                </div>
            </div>
            <Modal
                isMouseEnter={home.handleModal.isMouseEnter}
                top={home.handleModal.position.top}
                username={home.handleModal.username}
                name={home.handleModal.name}
                avatar={home.handleModal.avatar}
                status={home.handleModal.status}
                toggleOffModal={toggleOffModal}
                toggleOnModal={toggleOnModal}
            />
            {boxes && boxes.length > 0 ? <ChatBoxes boxes={boxes} closeChatBox={closeChatBox} /> : null}
        </>
    )
}

RightPanel.propTypes = {
    home: PropTypes.object,
    toggleOffModal: PropTypes.func,
    toggleOnModal: PropTypes.func,
    openChatBox: PropTypes.func,
    closeChatBox: PropTypes.func,
    getContacts: PropTypes.func,
}

export default RightPanel;