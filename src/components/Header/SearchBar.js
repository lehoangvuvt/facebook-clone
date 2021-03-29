import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import './style.scss';

const SearchBar = ({ searchHistoryResults }) => {
    const { register, handleSubmit } = useForm();
    const [searchString, setSearchString] = useState(null);

    function onClick() {
        setSearchString('');
    }

    function onBlur(e) {
        setSearchString(null);
    }

    function submit(data) {
        setSearchString(data.search);
    }

    function onChange() {
        document.getElementById('submit-btn').click();
    }

    return (
        <div className="header__search-section">
            <div
                style={{ boxShadow: searchString !== null ? '3px 4px 5px 0px rgba(0,0,0,0.1)' : 'none' }}
                className="header__search-section__search-bar-container">
                <div
                    style={{ width: searchString === null ? '70%' : '85%' }}
                    className="header__search-section__search-bar-container__search-bar">
                    <i style={{ transform: searchString === null ? 'scale(1)' : 'scale(0)' }} class="fas fa-search"></i>
                    <form autoComplete="off" onSubmit={handleSubmit(submit)}>
                        <input
                            style={{
                                transform: searchString === null ? 'translateX(0px)' : 'translateX(-30px)'
                            }}
                            onClick={() => { onClick() }}
                            onBlur={(e) => { onBlur(e) }}
                            onChange={() => { onChange() }}
                            placeholder="Search"
                            name="search"
                            ref={register}
                            type="text" />
                        <input id="submit-btn" style={{ display: 'none' }} type="submit" />
                    </form>
                </div>
                {searchString !== null && searchHistoryResults && searchHistoryResults.length > 0 ?
                    searchHistoryResults.map(search =>
                        <div className="header__search-section__search-bar-container__recent-search">
                            {search.searchString}
                        </div>
                    )
                    :
                    null
                }
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    searchHistoryResults: PropTypes.array,
}

export default SearchBar;