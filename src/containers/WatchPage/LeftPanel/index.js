import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useHistory, useParams } from 'react-router';

const LeftPanel = () => {
    const history = useHistory();

    const getStyleByPath = () => {
        let pathName = history.location.pathname;
        if (pathName.split('/').length > 2) {
            pathName = pathName.split('/')[2];
        } else {
            pathName = pathName.split('/')[1];
        }
        let style = { index: 0, backgroundDiv: "transparent", backgroundCircle: "rgba(255, 255, 255, 0.15)" };
        switch (pathName) {
            case "entertainment":
                style.index = 1;
                style.backgroundDiv = "#242f3c";
                style.backgroundCircle = "#1877f2";
                break;
            case "shows":
                style.index = 2;
                style.backgroundDiv = "#242f3c";
                style.backgroundCircle = "#1877f2";
                break;
            case "music":
                style.index = 3;
                style.backgroundDiv = "#242f3c";
                style.backgroundCircle = "#f0284a";
                break;
            case "saved":
                style.index = 4;
                style.backgroundDiv = "#242f3c";
                style.backgroundCircle = "#f7b928";
                break;
        }
        return style;
    }

    const redirect = (path) => {
        history.push(path);
    }

    return (
        <div className="watch-page__left-panel">
            <div className="watch-page__left-panel__search-video">
                <div className="watch-page__left-panel__search-video__header">
                    <div className="watch-page__left-panel__search-video__header__title">
                        <p>Entertainment</p>
                    </div>
                    <div className="watch-page__left-panel__search-video__header__btn">
                        <div>
                            <i class="fas fa-cog"></i>
                        </div>
                    </div>
                </div>
                <div className="watch-page__left-panel__search-video__search-bar">
                    <input type="text" placeholder="Search videos, shows & music" />
                </div>
            </div>
            <div className="watch-page__left-panel__nav-bar">
                <div className="watch-page__left-panel__nav-bar__options">
                    <div
                        onClick={() => { redirect('/entertainment') }}
                        style={getStyleByPath().index === 1 ? { backgroundColor: getStyleByPath().backgroundDiv } : null}
                        className="watch-page__left-panel__nav-bar__options__option">
                        <div className="watch-page__left-panel__nav-bar__options__option__left">
                            <div
                                style={getStyleByPath().index === 1 ? { backgroundColor: getStyleByPath().backgroundCircle } : null}
                                className="watch-page__left-panel__nav-bar__options__option__left__circle">
                                <i class='bx bxs-videos' ></i>
                            </div>
                        </div>
                        <div className="watch-page__left-panel__nav-bar__options__option__right">
                            <p>Videos</p>
                        </div>
                    </div>
                    <div
                        onClick={() => { redirect('/entertainment/shows') }}
                        style={getStyleByPath().index === 2 ? { backgroundColor: getStyleByPath().backgroundDiv } : null}
                        className="watch-page__left-panel__nav-bar__options__option">
                        <div className="watch-page__left-panel__nav-bar__options__option__left">
                            <div
                                style={getStyleByPath().index === 2 ? { backgroundColor: getStyleByPath().backgroundCircle } : null}
                                className="watch-page__left-panel__nav-bar__options__option__left__circle">
                                <i class='bx bxs-movie-play' ></i>
                            </div>
                        </div>
                        <div className="watch-page__left-panel__nav-bar__options__option__right">
                            <p>Shows</p>
                        </div>
                    </div>
                    <div
                        onClick={() => { redirect('/entertainment/music') }}
                        style={getStyleByPath().index === 3 ? { backgroundColor: getStyleByPath().backgroundDiv } : null}
                        className="watch-page__left-panel__nav-bar__options__option">
                        <div className="watch-page__left-panel__nav-bar__options__option__left">
                            <div
                                style={getStyleByPath().index === 3 ? { backgroundColor: getStyleByPath().backgroundCircle } : null}
                                className="watch-page__left-panel__nav-bar__options__option__left__circle">
                                <i class='bx bxs-music'></i>
                            </div>
                        </div>
                        <div className="watch-page__left-panel__nav-bar__options__option__right">
                            <p>Music</p>
                        </div>
                    </div>
                    <div
                        onClick={() => { redirect('/entertainment/saved') }}
                        style={getStyleByPath().index === 4 ? { backgroundColor: getStyleByPath().backgroundDiv } : null}
                        className="watch-page__left-panel__nav-bar__options__option">
                        <div className="watch-page__left-panel__nav-bar__options__option__left">
                            <div
                                style={getStyleByPath().index === 4 ? { backgroundColor: getStyleByPath().backgroundCircle } : null}
                                className="watch-page__left-panel__nav-bar__options__option__left__circle">
                                <i class='bx bxs-bookmark'></i>
                            </div>
                        </div>
                        <div className="watch-page__left-panel__nav-bar__options__option__right">
                            <p>Saved Items</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;