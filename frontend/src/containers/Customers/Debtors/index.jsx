import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import UnderConstruct from '../../../components/UnderConstruct';

class DebtorsView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    render() {
        const { сard } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Должники'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    <UnderConstruct />
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default withTheme()(connect(mapStateToProps)(DebtorsView));
export { DebtorsView as DebtorsViewNotConnected };
