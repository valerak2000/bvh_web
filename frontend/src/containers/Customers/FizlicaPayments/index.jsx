import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ImageZoom from 'react-medium-image-zoom';

const avtoplatezh = '/static/images/avtoplatezh.gif';
const instruktsiyaAvtoplatezh = '/static/images/instruktsiya_avtoplatezh.jpg';
const instruktsiyaAvtoplatezhWP = '/static/images/instruktsiya_avtoplatezh.webp';

const styles = theme => ({
    media: {
        boxShadow: '',
        width: '40%',
        //height: 277,
        objectFit: 'contain',
        margin: '0 auto',
        backgroundSize: 'contain',
    },
    text: {
        margin: '0.25rem auto 0.25rem 2rem',
    },
    header: {
        paddingBottom: 0,
    },
    imageZoom: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        //width: '20%',
    },
});

class FizlicaPaymentsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;
        const { subParagraf } = this.props.theme;

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
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Касса</strong><br />
                        <span style = { subParagraf }>
                            Произвести оплату за услуги холодного водоснабжения и водоотведения без комиссии можно в кассе ООО «БВХ» по
                        </span><br />
                        <span style = { subParagraf }>
                            адресу: ул. Советская, 56, здание БТИ.
                        </span><br />
                        <strong>Банки</strong><br />
                        <span style = { subParagraf }>
                            В банковских учреждениях ООО КБ «КубаньКредит», ОАО «Сбербанк России», ОАО «Крайинвестбанк».
                        </span><br />
                        <span style = { subParagraf }>
                            Информацию по дополнительным офисам обслуживания Вы можете получить на сайтах перечисленных организаций.
                        </span><br />
                        <strong>Почта России</strong><br />
                        <span style = { subParagraf }>
                            Оплата осуществляется наличными средствами в отделениях Почты России.
                        </span><br />
                        <strong>Банкомат и интернет-банк</strong><br />
                        <span style = { subParagraf }>
                            Оплата осуществляется банковской картой через сайт или банкомат выбранного банка. Для этого необходимо в меню
                        </span><br />
                        <span style = { subParagraf }>
                            выбрать опцию «Оплата ЖКУ» - «Брюховецкое водопроводное хозяйство» - «Номер лицевого счета» - «Показания ПУ».
                        </span><br />
                        <span style = { subParagraf }>
                            После операции необходимо распечатать чек, подтверждающий её проведение.
                        </span><br />
                        <strong>Автоплатеж Сбербанк</strong><br />
                        <span style = { subParagraf }>
                            <Button
                                focusRipple = { false }
                                aria-selected = { false }
                                centerRipple = { false }
                                disableRipple = { true }
                                disableTouchRipple = { true }
                                href = 'http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh#blok'
                                target = '_blank'
                            >
                                <img
                                    src = { avtoplatezh }
                                    alt = 'Автоплатеж Сбербанк'
                                    title = 'Автоплатеж Сбербанк'
                                    className = { classes.imageZoom }
                                />
                            </Button>
                        </span><br />
                        <span style = { subParagraf }>
                            Для подключения услуги Автоплатеж перейдите по этой <a href = 'http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh' target = '_blank'>ссылке</a>.
                        </span><br />
                        
                        <span style = { subParagraf }>
                            <ImageZoom
                                image = {{
                                    src: instruktsiyaAvtoplatezhWP,
                                    alt: 'Инструкция для подключения услуги Автоплатеж Сбербанк',
                                    title: 'Инструкция для подключения услуги Автоплатеж Сбербанк',
                                    className: classes.imageZoom,
                                }}
                                zoomImage = {{
                                    src: instruktsiyaAvtoplatezh,
                                    alt: 'Инструкция для подключения услуги Автоплатеж Сбербанк',
                                }}
                                shouldRespectMaxDimension = { true }
                                defaultStyles = {{
                                    zoomContainer: {
                                        zIndex: 10000,
                                    },
                                }}
                            />
                        </span>
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiFizlicaPaymentsView', flip: false, withTheme: true })(FizlicaPaymentsView);
/*

Для подключения услуги Автоплатеж перейдите по этой ссылке.
http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh
instruktsiya_avtoplatezh.jpg
*/