import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageZoom from 'react-medium-image-zoom';
import Slider from 'react-slick';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import { navigateTo } from '../../../utils/navigate';

const watherItsLive = '/static/images/water-glass-and-faucet.png';
const watherItsLiveWP = '/static/images/water-glass-and-faucet.webp';
const bvhVodozaborMashZal = '/static/images/vodozab1_mash.jpg';
const bvhVodozaborMashZalWP = '/static/images/vodozab1_mash.webp';
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
        label: 'Акция «Плати онлайн»',
        webpPath: sberPayOnline,
        imgPath: sberPayOnline,
    },
];

const styles = theme => ({
    imageZoom: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
    },
    imageZoomed: {
      height: 350,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      objectFit: 'contain',
    },
    bannerSber: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        //width: '50%',
    },
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
    children: {
        paddingLeft: theme.spacing.unit * 8,
    },
});

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
    const { classes } = props;

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
                    className = { classes.bannerSber }
                />
            </Button>
        </React.Fragment>
    );
}

function KKActions(props) {
    const { classes } = props;

    return (
        <React.Fragment key = 'kk_actions'>
            <Typography
                component = 'div'
                variant = 'body1'
                color = 'textSecondary'
                className = { classes.text }
            >
                <ImageZoom
                    image = {{
                        src: platezhKK,
                        alt: 'КБ Кубань Кредит ООО',
                        title: 'КБ Кубань Кредит ООО',
                        className: classes.imageZoom,
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
                href = 'https://ref.kubankredit.ru/2?h=C9D494F7B0A8BEDEC2442EC1169DC5E3&params=hh'
                target = '_blank'
            >
                ООО "БРЮХОВЕЦКОЕ ВОДОПРОВОДНОЕ ХОЗЯЙСТВО"
            </Button>
        </React.Fragment>
    );
}

function HomeView(props) {
/*         const { card } = this.props.theme.app;
        const { classes, theme } = this.props;
        const { subParagraf } = this.props.theme;
        const { activeStep } = this.state;*/
    const theme = useTheme();
    const { app } = theme;
    const { card, subParagraf } = app;
    const { dispatch } = props;
    const [activeStep, setActiveStep] = React.useState(0);

    const goToProtected = () => {
        navigateTo('/protected');
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
            style = { card }
        >
 
        </Card>
    );
}
/*
           <CardHeader
                title = 'Брюховецкий водоканал'
                titleTypographyProps = { card.titleTypography }
                style = { card.title }
                sx = { card.title }
            />
            <CardContent
                style = { card.text }
                sx = { card.text }
            >
                <Paper square elevation = { 0 } className = { classes.header } sx = {{
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
                                    className = { classes.imageZoom }
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
                <KKActions />
                <br />
                <br />
                <SberActions />
            </CardContent>
*/
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
