import React from 'react';
import CenterMenu from './CenterMenu';
import SearchBar from './SearchBar';
import './style.scss';
import UserPanel from './UserPanel';

const Header = () => {
    return (
        <div className="header">
            <SearchBar />
            <CenterMenu />
            <UserPanel />
        </div>
    )
}

export default Header;