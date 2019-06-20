import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class FizlicaPaymentsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Способы оплаты'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <UnderConstruct />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiFizlicaPaymentsView', flip: false, withTheme: true })(FizlicaPaymentsView);
/*
Касса
ООО «Краснодар Водоканал» Произвести оплату за услуги холодного водоснабжения и водоотведения без комиссии можно в кассе ООО «Краснодар Водоканал» по адресу: ул. Каляева,259.

Банки
В банковских учреждениях ООО КБ «КубаньКредит», ОАО «Сбербанк России», ОАО «Уралсиб», ОАО «Крайинвестбанк», ОАО «Первомайский», ЗАО «Экспресс-Волга. Информацию по дополнительным офисам обслуживания Вы можете получить на сайтах перечисленных организаций.

Почта России
Оплата осуществляется наличными средствами в отделениях Почты России.

Банкомат и интернет-банк
Оплата осуществляется банковской картой через сайт или банкомат выбранного банка. Для этого необходимо в меню выбрать опцию «Оплата ЖКУ» - «Краснодар Водоканал» - «Номер лицевого счета» - «Показания ПУ». После операции необходимо распечатать чек, подтверждающий её проведение.

Автоплатеж Сбербанк
avtoplatezh.gif
http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh#blok 

Для подключения услуги Автоплатеж перейдите по этой ссылке.
http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh
*/