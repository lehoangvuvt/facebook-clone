import React, { useEffect, useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getModalInfo, closeModal } from '../actions';
import './style.scss';
import Modal from './Modal';

const mapDispatchToProps = (dispatch) => {
    return {
        getModalInfo: (id, name, info, position, trailer) => { dispatch(getModalInfo(id, name, info, position, trailer)) },
        closeModal: () => { dispatch(closeModal()) },
        dispatch
    }
}

const Movie = React.forwardRef(({ id, name, image, info, getModalInfo, closeModal, popularity, rating }, ref) => {

    const getModal = (e) => {
        const position = e.target.getBoundingClientRect();
        const movieInfo = { summary: info.summary, country: info.country, language: info.language, popularity: popularity, rating: rating }
        getModalInfo(id, name, movieInfo, position, null);
    }

    return (
        <div
            onMouseEnter={(e) => { getModal(e) }}
            onMouseLeave={() => { closeModal() }}
            ref={ref} className="watch-page__main-content__shows-container__movies-list-container__list__movie">
            <img src={image} />
        </div>
    )
});

Movie.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    info: PropTypes.object,
    getModalInfo: PropTypes.func,
    closeModal: PropTypes.func,
    popularity: PropTypes.number,
    rating: PropTypes.number,
}

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(Movie);