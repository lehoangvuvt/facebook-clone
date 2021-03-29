import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CenterMenu from './CenterMenu';
import SearchBar from './SearchBar';
import './style.scss';
import UserPanel from './UserPanel';
import { makeSelectorGlobal } from '../../containers/App/selector';
import { getSearchHistory } from '../../containers/App/action';

const mapStateToProps = createStructuredSelector({
    globalState: makeSelectorGlobal,
});

const mapDispatchToProps = dispatch => {
    return {
        getSearchHistory: () => { dispatch(getSearchHistory()) },
        dispatch
    }
}

const Header = ({ getSearchHistory, globalState }) => {
    const { isLoading, error, results } = globalState.getSearchHistory;

    useEffect(() => {
        getSearchHistory();
    }, [])

    return (
        <div className="header">
            <SearchBar searchHistoryResults={results} />
            <CenterMenu />
            <UserPanel />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);