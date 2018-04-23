import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

class UnderConstructView extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    render() {
        return (
            <div>
                <p>Страница находится в раработке</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(UnderConstructView));
export { UnderConstructView as UnderConstructViewNotConnected };
