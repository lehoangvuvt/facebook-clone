import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Box from './Box';

const ChatBoxes = ({ boxes, closeChatBox }) => {

    return (
        <div className="chat-box-container">
            {boxes.map(box => <Box box={box} closeChatBox={closeChatBox} />)}
        </div>
    )
}

ChatBoxes.propTypes = {
    boxes: PropTypes.array,
    closeChatBox: PropTypes.func,
}

export default ChatBoxes;