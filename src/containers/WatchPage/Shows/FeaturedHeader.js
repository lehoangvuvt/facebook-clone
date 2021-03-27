import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';
import { getFeaturedShow } from '../actions';
import './style.scss';
import { makeSelectorWatch } from '../selector';

const mapDispatchToProps = (dispatch) => {
    return {
        getFeaturedShow: () => { dispatch(getFeaturedShow()) },
        dispatch
    }
}

const mapStateToProps = createStructuredSelector({
    watchState: makeSelectorWatch,
})

const FeaturedHeader = ({ bannerImage, name, link, getFeaturedShow, watchState }) => {
    const { isLoading, error, result } = watchState.getFeaturedShow;

    useEffect(() => {
        getFeaturedShow();
    }, [])

    return (
        result && !isLoading && !error ?
            <div
                style={{ backgroundImage: `url(${result.backdropImage})` }}
                className="watch-page__main-content__shows-container__featured-show">
                <div className="watch-page__main-content__shows-container__featured-show__text-holder">
                    <div className="watch-page__main-content__shows-container__featured-show__text-holder__header">
                        <p>Featured show</p>
                    </div>
                    <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container">
                        <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container__name">
                            <p>{result.name}</p>
                        </div>
                        <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container__right">
                            <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container__right__button">
                                See All Episodes
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="watch-page__main-content__shows-container__featured-show" >
                <div className="watch-page__main-content__shows-container__featured-show__text-holder">
                    <div className="watch-page__main-content__shows-container__featured-show__text-holder__header">
                        <p>Featured show</p>
                    </div>
                    <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container">
                        <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container__name">

                        </div>
                        <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container__right">
                            <div className="watch-page__main-content__shows-container__featured-show__text-holder__name-container__right__button">

                            </div>
                        </div>
                    </div>
                </div>
            </div >
    )
}

FeaturedHeader.propTypes = {
    bannerImage: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    getFeaturedShow: PropTypes.func,
    watchState: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedHeader);