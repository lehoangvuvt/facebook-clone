import React from 'react';
import './style.scss';

const UserPanel = (props) => {
    return (
        <div className="header__user-panel">
            <div className="header__user-panel__user-btn-container">

            </div>
            <div className="header__user-panel__utilities-container">
                <div className="header__user-panel__utilities-container__utility">
                    <i class="fas fa-plus"></i>
                </div>
                <div className="header__user-panel__utilities-container__utility">
                    <i class="fab fa-facebook-messenger"></i>
                </div>
                <div className="header__user-panel__utilities-container__utility">
                    <i class="fas fa-bell"></i>
                </div>
                <div className="header__user-panel__utilities-container__utility">
                    <i class="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}

export default UserPanel;