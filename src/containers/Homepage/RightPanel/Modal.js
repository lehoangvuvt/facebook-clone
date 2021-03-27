import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import './style.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #3498db;
`;



const Modal = ({ isMouseEnter, top, username, name, avatar, status, toggleOffModal, toggleOnModal }) => {

    const isDisplayModal = isMouseEnter && username && name ? true : false;

    return (
        avatar !== null ?
            <div onMouseEnter={() => { toggleOnModal(top, username, avatar, name, status); }}
                className="dialog" style={{
                    display: isDisplayModal ? 'flex' : 'none',
                    top: `${top - 70}px`
                }}>
                <div
                    onMouseLeave={() => { toggleOffModal(); }}
                    className="dialog__modal">
                    <div className="dialog__modal__avatar">
                        <img src={avatar} />
                    </div>
                    <div className="dialog__modal__info">
                    </div>
                </div>
            </div>
            :
            null
    )
}

Modal.propTypes = {
    isMouseEnter: PropTypes.bool,
    top: PropTypes.number,
    username: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    status: PropTypes.bool,
    toggleOffModal: PropTypes.func,
    toggleOnModal: PropTypes.func,
}

export default Modal;