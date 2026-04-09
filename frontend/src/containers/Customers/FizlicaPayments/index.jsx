import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ImageZoom from 'react-medium-image-zoom';

const avtoplatezh = '/static/images/avtoplatezh.gif';
const instruktsiyaAvtoplatezh = '/static/images/instruktsiya_avtoplatezh.jpg';
const instruktsiyaAvtoplatezhWP = '/static/images/instruktsiya_avtoplatezh.webp';

function FizlicaPaymentsView(props) {
    const theme = useTheme();
    const { app } = theme;
    const { card, subParagraf } = app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Способы оплаты'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: '0.25rem auto 0.25rem 2rem',
                    }}
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
                                sx = {{
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
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
                                className: '',
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

FizlicaPaymentsView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default FizlicaPaymentsView;
