import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';

class UnderConstruct extends React.Component {
    render() {
        return (
            <div>
                <h1>Страница находится в раработке</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(UnderConstruct));
