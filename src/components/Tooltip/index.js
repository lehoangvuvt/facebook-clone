import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectorGlobal } from '../../containers/App/selector';
import './style.scss';

const mapStateToProps = createStructuredSelector({
    globalState: makeSelectorGlobal,
});

const Tooltip = ({ id, globalState }) => {
    const currentToolTip = globalState.currentToolTip;

    return (
        <div style={{ display: currentToolTip.id === id ? 'flex' : 'none' }} className="tooltip">
            <p>{currentToolTip.name}</p>
        </div>
    )
}

Tooltip.propTypes = {
    id: PropTypes.number,
    globalState: PropTypes.object,
}

export default connect(mapStateToProps)(Tooltip);