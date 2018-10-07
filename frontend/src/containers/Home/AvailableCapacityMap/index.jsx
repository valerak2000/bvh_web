import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import UnderConstruct from '../../../components/UnderConstruct';

class AvailableCapacityMapView extends Component {
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
                    title = 'Карта доступной мощности'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText>
                    <UnderConstruct />
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default withTheme()(connect(mapStateToProps)(AvailableCapacityMapView));
export { AvailableCapacityMapView as AvailableCapacityMapViewNotConnected };
