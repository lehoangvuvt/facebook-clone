import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectorWatch } from '../selector';
import { getModalInfo, closeModal } from '../actions';
import '../style.scss';

const mapStateToProps = createStructuredSelector({
    watchState: makeSelectorWatch,
});


const mapDispatchToProps = (dispatch) => {
    return {
        getModalInfo: (id, name, info, position, trailer) => { dispatch(getModalInfo(id, name, info, position, trailer)) },
        closeModal: () => { dispatch(closeModal()) },
        dispatch
    }
}

const Modal = ({ watchState, closeModal, getModalInfo }) => {
    const { isLoading, error, info, isOpen } = watchState.getModalInfo;

    const getModal = () => {
        getModalInfo(info.id, info.name, info, info.position, info.trailer);
    }

    const close = () => {
        closeModal();
    }

    return (
        isOpen ?
            <div
                onMouseEnter={() => { getModal() }}
                onMouseLeave={() => { close() }}
                style={{ top: `${info.position.top - 420}px`, left: `${info.position.left - 250}px` }}
                className="watch-page__shows-modal">
                <div className="watch-page__shows-modal__box">
                    {info.trailer ?
                        <div className="watch-page__shows-modal__box__trailer">
                            <iframe
                                width="100%"
                                height="100%"
                                allow='autoplay'
                                allowFullScreen="allowFullScreen"
                                src={`https://www.youtube.com/embed/${info.trailer}?controls=1&&autoplay=0`}
                                frameBorder="0"
                            ></iframe>
                        </div>
                        :
                        <div className="watch-page__shows-modal__box__trailer">
                            <p>This movie has no trailer</p>
                        </div>
                    }
                    <div className="watch-page__shows-modal__box__info">
                        <div className="watch-page__shows-modal__box__info__header">
                            <p>Country: {info.country}</p>
                            <p>Language: {info.language}</p>
                            <p>Rating: {info.rating}</p>
                        </div>
                        <div className="watch-page__shows-modal__box__info__name">
                            <p>{info.name}</p>
                        </div>
                        <div className="watch-page__shows-modal__box__info__summary">
                            <p>{info.summary.substring(0, 100)}...</p>
                        </div>
                        <div className="watch-page__shows-modal__box__info__button">
                            <div>
                                <p>Watch Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            null
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);