import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class UnderConstructView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    render() {
        return (
            <Card
                style = { this.props.muiTheme.app.сard }
            >
                <CardTitle
                    title = 'Страница находится в разработке'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(UnderConstructView));
export { UnderConstructView as UnderConstructViewNotConnected };
