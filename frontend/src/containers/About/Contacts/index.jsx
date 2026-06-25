import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CardActionArea from '@mui/material/CardActionArea';
import ImageZoom from 'react-medium-image-zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { red } from '@mui/material/colors';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import Loader from '../../../components/loaders';
import FileLink from '../../../components/FileLink';

const MapsComponent = Loader(
    () => import(/* webpackChunkName: "Maps" */ '../../../components/Maps/Maps.jsx')
);

const bvhMainOfficeBuildWP = '/static/images/main_office.webp';
const bvhMainOfficeBuild = '/static/images/main_office.jpg';
const bvhAbonentsOfficeBuildWP = '/static/images/abon_office.webp';
const bvhAbonentsOfficeBuild = '/static/images/abon_office.jpg';
const rekvisity_ooo_bvh = '/static/files/media/rekvisity_ooo_bvh.pdf';
const rekvisity_ooo_boos = '/static/files/media/rekvisity_ooo_boos.pdf';

function ContactsView(props) {
    const theme = useTheme();
    const { app } = theme;
    const { card, subParagraf } = app;
    const [expandedMain, setExpandedMain] = React.useState(false);
    const [expandedAbon, setExpandedAbon] = React.useState(false);

    const handleExpandMainClick = () => {
        setExpandedMain(!expandedMain);
    };

    const handleExpandAbonClick = () => {
        setExpandedAbon(!expandedAbon);
    };

    return (
        <Card square={true} sx={card}>
            <CardHeader title="Контакты" {...props} />
            <CardHeader
                subheader="ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»"
                sx={{
                    paddingBottom: 0
                }}
            />
            <FileLink
                href={rekvisity_ooo_bvh}
                label="Реквизиты ООО «Брюховецкое водопроводное хозяйство»"
                sx={{ margin: 'auto auto auto 2rem' }}
            />
            <CardContent sx={card.text}>
                <CardActionArea onClick={handleExpandMainClick} sx={{ width: '100%' }}>
                    <div
                        style={{
                            boxSizing: 'border-box',
                            position: 'relative',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <CardHeader
                            title="Центральный офис"
                            titleTypographyProps={card.subtitle1}
                            subheader="Карта"
                            subheaderTypographyProps={card.subtitle2}
                            sx={{
                                display: 'inline-block',
                                verticalAlign: 'top',
                                whiteSpace: 'normal',
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingRight: 90
                            }}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                top: '0.5rem',
                                right: 4,
                                height: '100%'
                            }}
                        >
                            {expandedMain ? <ExpandLess /> : <ExpandMore />}
                        </span>
                    </div>
                </CardActionArea>
                <Collapse in={expandedMain} timeout="auto" unmountOnExit>
                    <MapsComponent
                        lat={props.main_office.lat}
                        lng={props.main_office.lng}
                        zoom={props.zoom}
                        balloonContent="352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196"
                        isMarkerShown
                    />
                </Collapse>
                <ImageZoom
                    image={{
                        src: bvhMainOfficeBuildWP,
                        alt: 'Центральный офис',
                        title: 'Центральный офис',
                        className: ''
                    }}
                    zoomImage={{
                        src: bvhMainOfficeBuild,
                        alt: 'Центральный офис'
                    }}
                    shouldRespectMaxDimension={true}
                    defaultStyles={{
                        zoomContainer: {
                            zIndex: 10000
                        }
                    }}
                />
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: '0.25rem auto 0.25rem 2rem'
                    }}
                >
                    <strong>Адрес:</strong>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faMapMarkedAlt}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196
                    </span>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;<a href="mailto:secretar@bruvodokanal.ru">secretar@bruvodokanal.ru</a>
                    </span>
                    <br />
                    <strong>График работы:</strong>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faClock}
                            flip="horizontal"
                            style={{ fontSize: 12, color: red[0] }}
                        />
                        &nbsp;Понедельник-пятница с 08-00 до 17-00, перерыв с 12-00 до 13-00
                    </span>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faAsterisk}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;Выходной: Суббота, Воскресенье
                    </span>
                    <br />
                    <strong>Диспетчерская служба</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 35-117
                    </span>
                    <br />
                    <span style={subParagraf}>Круглосуточно, без перерыва и выходных.</span>
                    <br />
                    <strong>Приемная директора</strong>: <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;
                        <FontAwesomeIcon icon={faFax} flip="horizontal" style={{ fontSize: 12 }} />
                        &nbsp;8 (86156) 31-194
                    </span>
                    <br />
                    <strong>Главный инженер</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;
                        <FontAwesomeIcon icon={faFax} flip="horizontal" style={{ fontSize: 12 }} />
                        &nbsp;8 (86156) 31-194
                    </span>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faClock}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;Прием населения: Понедельник, Пятница с 08-00 до 10-00.
                    </span>
                    <br />
                    <strong>Производственно-технический отдел</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 21-809
                    </span>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faClock}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;Прием населения: Понедельник, Пятница с 08-00 до 16-00, перерыв с
                        12-00 до 13-00
                    </span>
                    <br />
                    <strong>Вывоз жидких коммунальных стоков</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 35-117
                    </span>
                    <br />
                    <strong>Лаборатория</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 31-010
                    </span>
                    <br />
                    <strong>Юридический отдел</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 21-809
                    </span>
                    <br />
                    <strong>Бухгалтерия</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 35-200
                    </span>
                    <br />
                    <strong>Отдел кадров</strong>:<br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;
                        <FontAwesomeIcon icon={faFax} flip="horizontal" style={{ fontSize: 12 }} />
                        &nbsp;8 (86156) 31-194
                    </span>
                    <br />
                </Typography>
            </CardContent>
            <Divider />
            <CardContent sx={card.text}>
                <CardActionArea onClick={handleExpandAbonClick} sx={{ width: '100%' }}>
                    <div
                        style={{
                            boxSizing: 'border-box',
                            position: 'relative',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <CardHeader
                            title="Абонентский отдел"
                            titleTypographyProps={card.subtitle1}
                            subheader="Карта"
                            subheaderTypographyProps={card.subtitle2}
                            sx={{
                                display: 'inline-block',
                                verticalAlign: 'top',
                                whiteSpace: 'normal',
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingRight: 90
                            }}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                top: '0.5rem',
                                right: 4,
                                height: '100%'
                            }}
                        >
                            {expandedAbon ? <ExpandLess /> : <ExpandMore />}
                        </span>
                    </div>
                </CardActionArea>
                <Collapse in={expandedAbon} timeout="auto" unmountOnExit>
                    <MapsComponent
                        lat={props.abon_office.lat}
                        lng={props.abon_office.lng}
                        zoom={props.zoom}
                        balloonContent="352750, Краснодарский край, ст.Брюховецкая, ул. Советская, 56, здание БТИ"
                        isMarkerShown
                    />
                </Collapse>
                <ImageZoom
                    image={{
                        src: bvhAbonentsOfficeBuildWP,
                        alt: 'Абонентский отдел',
                        title: 'Абонентский отдел',
                        className: ''
                    }}
                    zoomImage={{
                        src: bvhAbonentsOfficeBuild,
                        alt: 'Абонентский отдел'
                    }}
                    shouldRespectMaxDimension={true}
                    defaultStyles={{
                        zoomContainer: {
                            zIndex: 10000
                        }
                    }}
                />
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: '0.25rem auto 0.25rem 2rem'
                    }}
                >
                    <strong>Адрес:</strong>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faMapMarkedAlt}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;352750, Краснодарский край, ст. Брюховецкая, ул. Советская, 56, здание
                        БТИ
                    </span>
                    <br />
                    <strong>Телефон:</strong>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;8 (86156) 22-257
                    </span>
                    <br />
                    <strong>График работы:</strong>
                    <br />
                    <span style={subParagraf}>
                        <FontAwesomeIcon
                            icon={faClock}
                            flip="horizontal"
                            style={{ fontSize: 12 }}
                        />
                        &nbsp;Понедельник-пятница с 08-00 до 16-00 перерыв с 11-00 до 12-00
                    </span>
                    <br />
                    <span style={subParagraf}>Выходной: Суббота и Воскресенье</span>
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );
}

ContactsView.propTypes = {
    theme: PropTypes.object.isRequired,
    main_office: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    abon_office: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    zoom: PropTypes.number
};

ContactsView.defaultProps = {
    main_office: {
        lat: 45.787037,
        lng: 38.990506
    },
    abon_office: {
        lat: 45.806224,
        lng: 39.00779
    },
    zoom: 16
};

export default ContactsView;
/*
<a 
  href={`https://yandex.ru{officeCoords[0]},${officeCoords[1]}`} 
  target="_blank" 
  rel="noreferrer"
>
  Открыть в Яндекс Картах и построить маршрут
</a>
*/
