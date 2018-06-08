import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
//import Paper from 'material-ui/Paper';
//import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
//import { List, ListItem } from 'material-ui/List';
//import NavigationCheck from 'material-ui/svg-icons/action/check-circle';
//import NavigationCheck from 'material-ui/svg-icons/navigation/check';

import './style.scss';

class CommonInfoView extends Component {
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
                    title = 'О компании'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText
                    style = { this.props.muiTheme.app.сard.text }
                    className = 'content'
                >
                    <p><strong>ООО «Брюховецкое водопроводное хозяйство» занимается водоснабжением и водоотведением ст.Брюховецой.
                    <br/>Предприятие было образовано 1 февраля 2006 года</strong></p>
                    <Divider />
                    <p>В силу геологического расположения Краснодара добыча воды ведется только из подземных источников артезианских скважин глубиной от 80 до 800 метров. Все они входят в состав 11 водозаборных сооружений ООО «Краснодар Водоканал».</p>
                    <p>В 2009-2010 году ООО «Краснодар Водоканал» получило Дипломы II и III степени во Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2009 г. В 2011 г. – предприятие получило высшую оценку – Диплом I степени на Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2010 г.</p>
                    <p>В период с 2007 по 2013 г. краснодарское предприятие «РОСВОДОКАНАЛА» реализует инвестиционную программу объемом 3,16 млрд рублей. В рамках инвестпрограммы будет проведена реконструкция водопроводных сооружений, насосных и канализационных станций, очистных сооружений и хлораторных установок, будут реконструированы существующие и построены новые сети водоснабжения и водоотведения.</p>
                    <p><strong>Экономический эффект от выполненных с 2006 г. работ:</strong></p>
                    <li>Потребление электроэнергии снижено <strong>на 14%.</strong></li>
                    <li>Потери воды сокращены <strong>на 15%.</strong></li>
                    <li>Количество крупных аварий уменьшено <strong>в 2,3 раза.</strong></li>
                    <p><strong>Награды:</strong></p>
                    <li>По итогам 2008 года «Краснодар Водоканал» был признан лучшим предприятием сферы ЖКХ города.</li>
                    <li>В 2009 году предприятие получило Диплом II степени во Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2008 г.;</li>
                    <li>Стало победителем конкурса среди предприятий муниципального образования город Краснодар на «Лучшее предприятие отрасли» по итогам I квартала; спортивная команда предприятия заняла I место в Спартакиаде трудовых коллективов МО г. Краснодар.</li>
                    <li>В 2010 году предприятие получило Диплом III степени во Всероссийском конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2009 г., спортивная команда предприятия заняла I место в Спартакиаде трудовых коллективов МО г. Краснодар;</li>
                    <li>ООО «Краснодар Водоканал» получило свидетельство участника краевой целевой Программы «Качество» по виду деятельности: «Услуги по водоснабжению потребителей города», что является подтверждением высокого качества его услуг;</li>
                    <li>Спортивная команда предприятия заняла I место в Спартакиаде трудовых коллективов МО г. Краснодар.</li>
                    <li> В 2011-2012 г.г. – предприятие получало высшую оценку – Диплом I степени на Всероссийском  конкурсе Министерства регионального развития РФ на звание лучшего предприятия в отрасли за 2010 и 2011 г.г. Также в в 2011 г. «Краснодар Водоканал» вошел в число самых экономически успешных компаний по данным Всероссийского бизнес-рейтинга и получил статус «Лидер экономики России -2010».</li>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(CommonInfoView));
export { CommonInfoView as CommonInfoViewNotConnected };