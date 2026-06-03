import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageZoom from 'react-medium-image-zoom';
import Slider from 'react-slick';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const watherItsLive = '/static/images/water-glass-and-faucet.png';
const watherItsLiveWP = '/static/images/water-glass-and-faucet.webp';
const bvhVodozaborMashZal = '/static/images/vodozab1_mash.jpg';
const bvhVodozaborMashZalWP = '/static/images/vodozab1_mash.webp';
const sberPayOnline = '/static/images/myTarget_600x600.jpg';
const avtoplatezh = '/static/images/avtoplatezh.gif';
const platezhKK = '/static/images/kubankredit.png';

const splashSteps = [
    {
        label: 'Природа дарит воду – мы доставляем её Вам',
        webpPath: watherItsLiveWP,
        imgPath: watherItsLive
    },
    {
        label: 'Водозабор - Насосный зал',
        webpPath: bvhVodozaborMashZalWP,
        imgPath: bvhVodozaborMashZal
    },
    {
        label: 'Акция «Плати онлайн»',
        webpPath: sberPayOnline,
        imgPath: sberPayOnline
    }
];

const StyledImageZoom = styled('img')({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
});

const StyledBannerSber = styled('img')({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
});

const StyledText = styled(Typography)({
    margin: 'auto auto auto 0.5rem',
    textAlign: 'justify',
    textIndent: '1.5em'
});

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'before:black' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}

function SberActions() {
    return (
        <>
            <Button
                disableRipple
                disableTouchRipple
                href="http://www.sberbank.ru/ru/person/paymentsandremittances/payments/zhkh#blok"
                target="_blank"
            >
                <StyledBannerSber
                    src={avtoplatezh}
                    alt="Автоплатеж Сбербанк"
                    title="Автоплатеж Сбербанк"
                />
            </Button>
        </>
    );
}

function KKActions() {
    return (
        <>
            <StyledText component="div" variant="body1" color="text.secondary">
                <ImageZoom
                    image={{
                        src: platezhKK,
                        alt: 'КБ Кубань Кредит ООО',
                        title: 'КБ Кубань Кредит ООО'
                    }}
                    shouldRespectMaxDimension
                    defaultStyles={{
                        zoomContainer: {
                            zIndex: 10000
                        }
                    }}
                />{' '}
                Прием платежей по карте любого банка через КБ Кубань Кредит ООО может быть
                осуществлён через приложение банка Кубань Кредит, расположенное по ссылке:
            </StyledText>
            <Button
                disableRipple
                disableTouchRipple
                href="https://ref.kubankredit.ru/2?h=C9D494F7B0A8BEDEC2442EC1169DC5E3&params=hh"
                target="_blank"
            >
                ООО "БРЮХОВЕЦКОЕ ВОДОПРОВОДНОЕ ХОЗЯЙСТВО"
            </Button>
        </>
    );
}

function HomeView(props) {
    const [activeStep, setActiveStep] = useState(0);

    const cardStyle = props?.cardStyle || {};

    const userName = useSelector((state) => state.auth.userName);
    const statusText = useSelector((state) => state.auth.statusText);

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
        <Card square={true} sx={cardStyle}>
            <CardHeader
                title="Брюховецкий водоканал"
                titleTypographyProps={cardStyle.titleTypography}
                style={cardStyle.title}
            />
            <CardContent style={cardStyle.text}>
                <Paper square elevation={0}>
                    <Typography>{splashSteps[activeStep].label}</Typography>
                </Paper>
                <Slider {...settings}>
                    {splashSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <StyledImageZoom
                                    src={step.webpPath}
                                    alt={step.label}
                                    title={step.label}
                                />
                            ) : null}
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
        </Card>
    );
}

HomeView.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default HomeView;
