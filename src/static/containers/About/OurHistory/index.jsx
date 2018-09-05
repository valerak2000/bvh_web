import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
//import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import './style.scss';

class OurHistoryView extends Component {
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
                    title = 'Наша история'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText
                    style = { this.props.muiTheme.app.сard.text }
                    className = 'content'
                >
                    <h4><strong>История брюховецкого водопроводного хозяйства</strong></h4>
                    <p>Дату 18 апреля 1954 года можно считать днем рождения брюховецкого водопровода. Именно в этот воскресный день 350 работников учреждений и организаций  района вышли на воскресник для прокладки трассы будущего водопровода. Накануне по будущей трассе прошел канавокопатель Брюховецкого МТС, который обозначил и углубил траншею на 40 сантиметров. Это значительно облегчило работу участникам воскресника.</p>
                    <p>Водопроводная сеть станицы каждый год увеличивалась. В 1956 году проложено 5000 погонных метров водопровода. Водопровод дошел до перекрестка улиц  Красная - Ковалева, Ленина-Кирова, Тимофеева – Кирова.</p>
                    <p>В 1957 году проложено всего 840 метров водопроводных линий, а в 1958 -  5400 метров. На начало 1959 года в станице было уже 27 водозаборных колонок, и в том же году водопроводная сеть увеличилась еще на 8 000 метров.</p>
                    <p>В 1960 году произведен ремонт имеющейся артскважины,  завершились работы по бурению и оборудованию двух дополнительных скважин, а также по строительству 25-ти метровой водонапорной башни.
                    С этого года станица Брюховецкая стараниями многих  людей, работающих в водопроводном хозяйстве, перестала ощущать острый недостаток в воде.</p>
                    <a href = "http://bru-museum.ru/stati/istoriya-2/317-istoriya-stanichnogo-vodoprovoda" target ="_blank">Источник</a>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(OurHistoryView));
export { OurHistoryView as OurHistoryViewNotConnected };
