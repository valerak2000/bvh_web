import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../../components/Card/CardHeader.jsx';
import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class ElektronnayaPriemnayaView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    render() {
        const { сard } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Электронная приемная'
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

export default withStyles(null, { name: 'muiElektronnayaPriemnayaView', flip: false, withTheme: true })(ElektronnayaPriemnayaView);
//export { ElektronnayaPriemnayaView as ElektronnayaPriemnayaViewNotConnected };
