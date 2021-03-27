import React from 'react';
import PropTypes from 'prop-types';

const CreatePostModal = ({ isOpen }) => {
    return (
        <div className='homepage__news-feed__new-status__create-post-modal'>
            <div className='homepage__news-feed__new-status__create-post-modal__modal'>

            </div>
        </div>
    )
}

CreatePostModal.propTypes = {
    isOpen: PropTypes.bool,
}

export default CreatePostModal;