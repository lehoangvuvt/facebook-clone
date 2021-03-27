import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './style.scss';

const CenterMenu = (props) => {
    const location = useLocation();
    const history = useHistory();

    function changeOption(opt) {
        switch (opt) {
            case 1:
                history.push('/');
                break;
            case 2:
                history.push('/friends');
                break;
            case 3:
                history.push('/entertainment');
                break;
            case 4:
                history.push('/marketplace');
                break;
            default:
                history.push('/groups/feed');
                break;
        }
    }

    return (
        <div className="header__center-menu">
            <div title="Homepage" onClick={() => { changeOption(1) }}
                className={location.pathname && location.pathname === "/" ?
                    "header__center-menu__option header__center-menu__option--selected" :
                    "header__center-menu__option header__center-menu__option--not-selected"}>
                <i class="fas fa-home"></i>
            </div>
            <div title="Friends" onClick={() => { changeOption(2) }}
                className={location.pathname && location.pathname === "/friends" ?
                    "header__center-menu__option header__center-menu__option--selected" :
                    "header__center-menu__option header__center-menu__option--not-selected"}>
                <i class="fas fa-user-friends"></i>
            </div>
            <div title="Watch" onClick={() => { changeOption(3) }}
                className={location.pathname && location.pathname.split('/')[1].includes("entertainment") ?
                    "header__center-menu__option header__center-menu__option--selected" :
                    "header__center-menu__option header__center-menu__option--not-selected"}>
                <i style={{ fontSize: '1.6em' }} class="fab fa-napster"></i>
            </div>
            <div title="Marketplace" onClick={() => { changeOption(4) }}
                className={location.pathname && location.pathname.split('/')[1].includes("marketplace") ?
                    "header__center-menu__option header__center-menu__option--selected" :
                    "header__center-menu__option header__center-menu__option--not-selected"}>
                <i style={{ fontSize: '1.5em' }} class='bx bx-store'></i>
            </div>
            <div title="Groups" onClick={() => { changeOption(5) }}
                className={location.pathname && location.pathname.split('/')[1].includes("groups") ?
                    "header__center-menu__option header__center-menu__option--selected" :
                    "header__center-menu__option header__center-menu__option--not-selected"}>
                <i class="fas fa-users"></i>
            </div>
        </div>
    )
}

export default CenterMenu;