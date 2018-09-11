import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import UnderConstruct from '../../../components/UnderConstruct';

class NewsAboutUsView extends Component {
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
                    title = 'СМИ о нашей работе'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText>
                    <a 
                        href="http://kbereg.info/iz-otchetnogo-doklada-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-otkry-toj-sessii-soveta-munitsipal-nogo-obrazovaniya-bryuhovetskij-rajon/" 
                        target = "_blank"
                    >
                        06.03.2017. kbereg.info - Из отчетного доклада главы Брюховецкого района Владимира Мусатова на открытой сессии Совета муниципального образования Брюховецкий район.
                    </a>
                    <br/>
                    <a 
                        href="http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/" 
                        target = "_blank"
                    >
                        09.07.2018. kbereg.info - Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.
                    </a>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(NewsAboutUsView));
export { NewsAboutUsView as NewsAboutUsViewNotConnected };
