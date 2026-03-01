import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageZoom from 'react-medium-image-zoom';
import Slider from 'react-slick-beyli-fork';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const watherItsLive = '/static/images/water-glass-and-faucet.png';
const watherItsLiveWP = '/static/images/water-glass-and-faucet.webp';
const bvhVodozaborMashZal = '/static/images/vodozab1_mash.jpg';
const bvhVodozaborMashZalWP = '/static/images/vodozab1_mash.webp';
const bvhOchstnye1 = '/static/images/ochist1.jpg';
const bvhOchstnye1WP = '/static/images/ochist1.webp';
const bvhOchstnye2 = '/static/images/ochist2.jpg';
const bvhOchstnye2WP = '/static/images/ochist2.webp';
const bvhOchstnyeLaba = '/static/images/ochist_lab.jpg';
const bvhOchstnyeLabaWP = '/static/images/ochist_lab.webp';
const sberPayOnline = '/static/images/myTarget_600x600.jpg';
const avtoplatezh = '/static/images/avtoplatezh.gif';
const instruktsiyaAvtoplatezh = '/static/images/instruktsiya_avtoplatezh.jpg';
const instruktsiyaAvtoplatezhWP = '/static/images/instruktsiya_avtoplatezh.webp';
const platezhKK = '/static/images/kubankredit.png';

const splashSteps = [
    {
        label: 'Природа дарит воду – мы доставляем её Вам',
        webpPath: watherItsLiveWP,
        imgPath: watherItsLive,
    },
    {
        label: 'Водозабор - Насосный зал',
        webpPath: bvhVodozaborMashZalWP,
        imgPath: bvhVodozaborMashZal,
    },
    {
        label: 'Очистные - Аэротенк',
        webpPath: bvhOchstnye1WP,
        imgPath: bvhOchstnye1,
    },
    {
        label: 'Очистные - Отстойник ',
        webpPath: bvhOchstnye2WP,
        imgPath: bvhOchstnye2,
    },
    {
        label: 'Очистные - Лаборатория',
        webpPath: bvhOchstnyeLabaWP,
        imgPath: bvhOchstnyeLaba,
    },
    {
        label: 'Акция «Плати онлайн»',
        webpPath: sberPayOnline,
        imgPath: sberPayOnline,
    },
];

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className = { className }
        style = {{ ...style, display: 'block', color: 'before:black' }}
        onClick = { onClick }
      />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className = { className }
        style = {{ ...style, display: 'block' }}
        onClick = { onClick }
      />
    );
}

function SberActions(props) {
    return (
        <React.Fragment key = 'sber_actions'>
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
        </React.Fragment>
    );
}

function BoosActions(props) {
    return (
        <React.Fragment key = 'boos_actions'>
            <Typography
                variant = 'body1'
                color = 'textSecondary'
                sx = {{
                    margin: 'auto auto auto 0.5rem',
                    textAlign: 'justify',
                    textIndent: '1.5em',
                }}
            >
                Уважаемые абоненты ООО «Брюховецкое предприятия отвода и очистки стоков!
      В связи с расторжением договора № 2/7 «О передаче в аренду недвижимого имущества, являющегося муниципальной собственностью Брюховецкого сельского поселения» от 01.12.2007 года, заключенного между Брюховецким сельским поселением и ООО «Брюховецкое предприятие отвода и очистки стоков» и, соответственно, передачей объектов водоотведения Брюховецкому сельскому поселению, ООО «Брюховецкое предприятие отвода и очистки стоков» настоящим уведомляет, что с 21 ноября 2025 года (дата расторжения вышеуказанного договора аренды) прекращает свою хозяйственную деятельность по водоотведению в ст. Брюховецкой Краснодарского края.
   Прекращение деятельности по водоотведению является основанием для расторжения договоров водоотведения, поскольку исполнение договоров становится невозможным.
     Договоры водоотведения будут считаться расторгнутыми с <b>21 ноября 2025 года</b>.

     Администрация ООО «БООС»
            </Typography>
        </React.Fragment>
    );
}

function KKActions(props) {
    return (
        <React.Fragment key = 'kk_actions'>
            <Typography
                variant = 'body1'
                color = 'textSecondary'
                sx = {{
                    margin: 'auto auto auto 0.5rem',
                    textAlign: 'justify',
                    textIndent: '1.5em',
                }}
            >
                <ImageZoom
                    image = {{
                        src: platezhKK,
                        alt: 'КБ Кубань Кредит ООО',
                        title: 'КБ Кубань Кредит ООО',
                        className: '',
                    }}
                    shouldRespectMaxDimension = { true }
                    defaultStyles = {{
                        zoomContainer: {
                            zIndex: 10000,
                        },
                    }}
                /> Прием платежей по карте любого банка через КБ Кубань Кредит ООО
                может быть осуществлён через приложение банка Кубань Кредит, расположенное по ссылке:
            </Typography>
            <Button
                focusRipple = { false }
                aria-selected = { false }
                centerRipple = { false }
                disableRipple = { true }
                disableTouchRipple = { true }
                href = 'https://ref.kubankredit.ru/2?h=7F29F8BB0D761524929E9EBD2C9D7B53&params=hh'
                target = '_blank'
            >
                ООО "БРЮХОВЕЦКОЕ ПРЕДПРИЯТИЕ ОТВОДА И ОЧИСТКИ СТОКОВ"
            </Button>
            <Button
                focusRipple = { false }
                aria-selected = { false }
                centerRipple = { false }
                disableRipple = { true }
                disableTouchRipple = { true }
                href = 'https://ref.kubankredit.ru/2?h=C9D494F7B0A8BEDEC2442EC1169DC5E3&params=hh'
                target = '_blank'
            >
                ООО "БРЮХОВЕЦКОЕ ВОДОПРОВОДНОЕ ХОЗЯЙСТВО"
            </Button>
        </React.Fragment>
    );
}

function HomeView(props) {
    const theme = useTheme();
    const { card, subParagraf } = theme;
    const { dispatch } = props;
    const [activeStep, setActiveStep] = React.useState(0);

    const goToProtected = () => {
        dispatch(push('/protected'));
    };

    const maxSteps = splashSteps.length;
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '60px',
        swipe: true,
        arrows: true,
        className: '',
        adaptiveHeight: true,
        beforeChange: (current, next) => setActiveStep(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Брюховецкий водоканал'
                titleTypographyProps = { card.titleTypography }
                sx = { card.title }
            />
            <CardContent
                sx = { card.text }
            >
                <Paper square elevation = { 0 } sx = {{
                    '& .MuiPaper-root': {
                        paddingBottom: 0,
                    },
                }}>
                    <Typography>{ splashSteps[activeStep].label }</Typography>
                </Paper>
                <Slider {...settings}>
                    { splashSteps.map((step, index) => (
                        <div
                            key = { step.label }
                        >
                            { Math.abs(activeStep - index) <= 2 ? (
                                <img
                                    src = { step.webpPath }
                                    alt = { step.label }
                                    title = { step.label }
                                    sx = {{
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        width: '50%',
                                    }}
                                />
                            ) : null }
                        </div>
                    ))}
                </Slider>
                <br />
                <br />
                <BoosActions />
                <br />
                <br />
                <KKActions />
                <br />
                <br />
                <SberActions />
            </CardContent>
        </Card>
    );
}

HomeView.propTypes = {
    statusText: PropTypes.string,
    userName: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

HomeView.defaultProps = {
    statusText: '',
    userName: ''
};

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
