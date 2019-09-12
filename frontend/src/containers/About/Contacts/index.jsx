import React, { Component } from 'react';
//import classnames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
//import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ImageZoom from 'react-medium-image-zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
//import GridItem from '../../../components/Grid/GridItem.jsx';
import Loader from '../../../components/loaders';
//import { Maps } from '../../../components/Maps';
import FileLink from '../../../components/FileLink';

const MapsComponent = Loader(() =>
  import(/* webpackChunkName: "Maps" */ '../../../components/Maps/Maps.jsx')
);

const bvhMainOfficeBuildWP = '/static/images/main_office.webp';
const bvhMainOfficeBuild = '/static/images/main_office.jpg';
const bvhAbonentsOfficeBuildWP = '/static/images/abon_office.webp';
const bvhAbonentsOfficeBuild = '/static/images/abon_office.jpg';
const rekvisity_ooo_bvh = '/static/files/media/rekvisity_ooo_bvh.pdf';
const rekvisity_ooo_boos = '/static/files/media/rekvisity_ooo_boos.pdf';

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
        width: '40%',
    },
});

class ContactsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
        main_office: {
            lat: 45.787037,
            lng: 38.990506,
        },
        abon_office: {
            lat: 45.806224,
            lng: 39.007790,
        },
        zoom: 16,
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            expandedMain: false,
            expandedAbon: false,
        };
    }

    handleExpandMainClick = () => {
        this.setState(state => ({ expandedMain: !state.expandedMain }));
    };

    handleExpandAbonClick = () => {
        this.setState(state => ({ expandedAbon: !state.expandedAbon }));
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
                    title = 'Контакты'
                    { ...this.props }
                />
                <CardHeader
                    subheader = 'ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»'
                    className = { classes.header }
                />
                <FileLink
                    href = { rekvisity_ooo_bvh } 
                    label = 'Реквизиты ООО «Брюховецкое водопроводное хозяйство»'
                    style = {{ margin: 'auto auto auto 2rem', }}
                />
                <CardHeader
                    subheader = 'ООО «Брюховецкое предприятие отвода и очистки стоков», ООО «БООС»'
                    className = { classes.header }
                    { ...this.props }
                />
                <FileLink
                    href = { rekvisity_ooo_boos } 
                    label = 'Реквизиты ООО «Брюховецкое предприятие отвода и очистки стоков»'
                    style = {{ margin: 'auto auto auto 2rem', }}
                />
                <CardContent
                    style = { card.text }
                >
                    <CardActionArea
                        onClick = { this.handleExpandMainClick }
                        style = {{ width: '100%' }}
                    >
                        <div
                            style = {{
                                boxSizing: 'border-box',
                                position: 'relative',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <CardHeader
                                title = 'Центральный офис'
                                titleTypographyProps = { card.subtitle1 }
                                subheader = 'Карта'
                                subheaderTypographyProps = { card.subtitle2 }
                                style = {{
                                    display: 'inline-block',
                                    verticalAlign: 'top',
                                    whiteSpace: 'normal',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingRight: 90,
                                }}
                                { ...this.props }
                            />
                            <span
                                style = {{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    right: 4,
                                    height: '100%',
                                }}                            
                            >
                                { this.state.expandedMain ? <ExpandLess /> : <ExpandMore /> }
                            </span>
                        </div>
                    </CardActionArea>
                    <Collapse in = { this.state.expandedMain } timeout = 'auto' unmountOnExit>
                        <MapsComponent
                            lat = { this.props.main_office.lat}
                            lng = { this.props.main_office.lng}
                            zoom = { this.props.zoom }
                            balloonContent = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                            isMarkerShown
                        />
                    </Collapse>
                    <ImageZoom
                        image = {{
                            src: bvhMainOfficeBuildWP,
                            alt: 'Центральный офис',
                            title: 'Центральный офис',
                            className: classes.imageZoom,
                        }}
                        zoomImage = {{
                            src: bvhMainOfficeBuild,
                            alt: 'Центральный офис',
                        }}
                        shouldRespectMaxDimension = { true }
                        defaultStyles = {{
                            zoomContainer: {
                                zIndex: 10000,
                            },
                        }}
                    />
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Адрес:</strong><br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faMapMarkedAlt }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196
                        </span><br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faEnvelope }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;<a href="mailto:secretar@bruvodokanal.ru">secretar@bruvodokanal.ru</a>
                        </span>
                        <br />
                        <strong>График работы:</strong><br />
                        <span style = { subParagraf }>
                            Понедельник-пятница с 08-00 до 17-00, перерыв с 12-00 до 13-00
                        </span><br />
                        <span style = { subParagraf }>
                            Выходной: Суббота, Воскресенье
                        </span><br />
                        <strong>Диспетчерская служба</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 35-117
                        </span><br />
                        <span style = { subParagraf }>
                            Круглосуточно, без перерыва и выходных.
                        </span><br />
                        <strong>Приемная директора</strong>: <br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 31-194
                        </span><br />
                        <strong>Главный инженер</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 31-194
                        </span><br />
                        <span style = { subParagraf }>
                            Прием населения: Понедельник, Пятница с 08-00 до 10-00.
                        </span><br />
                        <strong>Производственно-технический отдел</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 21-809
                        </span><br />
                        <span style = { subParagraf }>
                            Прием населения: Понедельник, Пятница с 08-00 до 16-00, перерыв с 12-00 до 13-00
                        </span><br />
                        <strong>Вывоз жидких коммунальных стоков</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 35-117
                        </span><br />
                        <strong>Лаборатория</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 31-010
                        </span><br />
                        <strong>Юридический отдел</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 21-809
                        </span><br />
                        <strong>Бухгалтерия</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 35-200
                        </span><br />
                        <strong>Отдел кадров</strong>:<br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 31-194
                        </span><br />
                    </Typography>
                </CardContent>
                <Divider />
                <CardContent
                    style = { card.text }
                >
                    <CardActionArea
                        onClick = { this.handleExpandAbonClick }
                        style = {{ width: '100%' }}
                    >
                        <div
                            style = {{
                                boxSizing: 'border-box',
                                position: 'relative',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <CardHeader
                                title = 'Абонентский отдел'
                                titleTypographyProps = { card.subtitle1 }
                                subheader = 'Карта'
                                subheaderTypographyProps = { card.subtitle2 }
                                style = {{
                                    display: 'inline-block',
                                    verticalAlign: 'top',
                                    whiteSpace: 'normal',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingRight: 90,
                                }}
                                { ...this.props }
                            />
                            <span
                                style = {{
                                    position: 'absolute',
                                    top: '0.5rem',
                                    right: 4,
                                    height: '100%',
                                }}                            
                            >
                                { this.state.expandedAbon ? <ExpandLess /> : <ExpandMore /> }
                            </span>
                        </div>
                    </CardActionArea>
                    <Collapse in = { this.state.expandedAbon } timeout = 'auto' unmountOnExit>
                        <MapsComponent
                            lat = { this.props.abon_office.lat }
                            lng = { this.props.abon_office.lng }
                            zoom = { this.props.zoom }
                            balloonContent = '352750, Краснодарский край, ст.Брюховецкая, ул. Советская, 56, здание БТИ'
                            isMarkerShown
                        />
                    </Collapse>
                    <ImageZoom
                        image = {{
                            src: bvhAbonentsOfficeBuildWP,
                            alt: 'Абонентский отдел',
                            title: 'Абонентский отдел',
                            className: classes.imageZoom,
                        }}
                        zoomImage = {{
                            src: bvhAbonentsOfficeBuild,
                            alt: 'Абонентский отдел',
                        }}
                        shouldRespectMaxDimension = { true }
                        defaultStyles = {{
                            zoomContainer: {
                                zIndex: 10000,
                            },
                        }}
                    />
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Адрес:</strong><br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faMapMarkedAlt }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;352750, Краснодарский край, ст. Брюховецкая, ул. Советская, 56, здание БТИ
                        </span><br />
                        <strong>Телефон:</strong><br />
                        <span style = { subParagraf }>
                            <FontAwesomeIcon
                                icon = { faPhone }
                                flip = 'horizontal'
                                style = {{ fontSize: 12, }}
                            />
                            &nbsp;8 (86156) 22-257
                        </span><br />
                        <strong>График работы:</strong><br />
                        <span style = { subParagraf }>
                            Понедельник-пятница с 08-00 до 16-00 перерыв с 11-00 до 12-00
                        </span><br />
                        <span style = { subParagraf }>
                            Выходной: Суббота и Воскресенье
                        </span><br />
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiContactsView', flip: false, withTheme: true })(ContactsView);
//export { ContactsView as ContactsViewNotConnected };

/*
            <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                </GridItem>
            </Grid>
*/