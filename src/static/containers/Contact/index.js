import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
//import Paper from 'material-ui/Paper';
//import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class ContactView extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    render() {
        return (
            <Card
                style= {{
                    margin: '0 auto'
                }}
            >
                <CardTitle
                    title = 'Контакты'
                    subtitle = 'ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»'
                />
                <CardText>
                    <strong>Юридический адрес:</strong> 352750, Краснодарский край, ст. Брюховецкая, ул. О. Кошевого, 196
                    <p><strong>Директор:</strong> Ляшенко Александр Николаевич<br/>
                    <strong>Главный бухгалтер:</strong> Романова Ольга Григорьевна</p>
                    <h4><strong>Телефоны</strong></h4>
                    <ul>
                        <li><strong>Круглосуточный диспетчер</strong>&nbsp; 8(86156) 35-117</li>
                        <li><strong>Абонентский отдел</strong>&nbsp; 8(86156) 222-57</li>
                        <li><strong>Бухгалтерия</strong> 8(86156) 35-200</li>
                        <li><strong>Секретарь/факс&nbsp;</strong>8(86156) 31-194</li>
                    </ul>
                    <ul>
                        <li><strong>Секретарь/факс&nbsp;</strong>8(86156) 31-194</li>
                    <address>
                        <strong>адрес сайта:</strong> <a href="http://www.brhvh.ru"><strong>http://www.brhvh.ru</a>
                        <strong>адрес электронной почты:</strong> <a href="mailto:br_teploseti@mail.ru"><strong>br_teploseti@mail.ru</a>
                    </address>
                    <li><strong>ИНН</strong> 2327009703</li>
                    <li><strong>КПП</strong> 232701001</li>
                    <h4>Коды</h4>
                    <ul>
                        <li><strong>ОГРН</strong> 105 231 529 0 961</li>
                        <li><strong>ОГРН</strong> 105 231 529 0 961</li>
                        <li><strong>ОКПО</strong> 950 79 317</li>
                        <li><strong>ОКАТО</strong> 032 108 07 001</li>
                        <li><strong>ОКТМО</strong> 036 10 407</li>
                        <li><strong>ОКОГУ</strong> 2 100 14</li>
                        <li><strong>ОКФС</strong> 16</li>
                        <li><strong>ОКОПФ</strong> 12 165</li>
                        <li><strong>ОКВЭД</strong> 36.00.1</li>
                    </ul>
                    <h4>Банковские реквизиты</h4>
                    <ul>
                        <li>ПАО «Крайинвестбанк» г.Краснодар</li>
                        <li><strong>р/с</strong> 407 028 103 00 29 00 10 119</li>
                        <li><strong>к/с</strong> 301 018 105 0000 0000 516</li>
                        <li><strong>БИК</strong> 040 349 516</li>
                    </ul>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(ContactView));
export { ContactView as ContactViewNotConnected };
