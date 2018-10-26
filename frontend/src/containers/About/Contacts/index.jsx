import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
//import ExpansionPanel from '@material-ui/core/ExpansionPanel';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Loader from '../../../components/loaders';
//import { Maps } from '../../../components/Maps';
import PdfLink from '../../../components/PdfLink';

const MapsComponent = Loader(() =>
  import(/* webpackChunkName: "Maps" */ '../../../components/Maps.jsx')
);

const bvhMainOfficeBuild = '/static/images/main_office.jpg';
const bvhAbonentsOfficeBuild = '/static/images/abon_office.jpg';
const rekvisity_ooo_bvh = '/static/files/media/rekvisity_ooo_bvh.pdf';
const rekvisity_ooo_boos = '/static/files/media/rekvisity_ooo_boos.pdf';

const styles = theme => ({
    media: {
        boxShadow: '',
        width: '40%',
        height: 277,
        objectFit: 'contain',
        margin: '0 auto',
        backgroundSize: 'contain',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
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
        zoom: 17,
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

    render() {
        const { classes } = this.props;
        const { сard } = this.props.theme.app;
        //const { file, numPages } = this.state;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Контакты'
                    titleTypographyProps = { сard.title }
                />
                <CardHeader
                    subheader = 'ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»'
                    subheaderTypographyProps = { сard.headline }
                />
                <CardHeader
                    subheader = 'ООО «Брюховецкое предприятие отвода и очистки стоков», ООО «БООС»'
                    subheaderTypographyProps = { сard.headline }
                />
                <Card
                    square = { true }
                    style = { сard }
                >
                    <CardHeader
                        title = 'Центральный офис'
                        titleTypographyProps = { сard.subtitle1 }
                        subheader = 'Карта'
                        subheaderTypographyProps = { сard.subtitle2 }
                        action = {
                            <IconButton
                                onClick = { this.handleExpandMainClick }
                            >
                                { this.state.expandedMain ? <ExpandLess /> : <ExpandMore /> }
                            </IconButton>
                        }
                    />
                    <Collapse in = { this.state.expandedMain } timeout = "auto" unmountOnExit>
                        <MapsComponent
                            lat = { this.props.main_office.lat}
                            lng = { this.props.main_office.lng}
                            zoom = { this.props.zoom }
                            balloonContent = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                            isMarkerShown
                        />
                    </Collapse>
                </Card>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiContactsView', flip: false, withTheme: true })(ContactsView);
//export { ContactsView as ContactsViewNotConnected };

/*
                        <Maps
                            lat = { this.props.main_office.lat}
                            lng = { this.props.main_office.lng}
                            zoom = { this.props.zoom }
                            isMarkerShown
                        />

                    <CardActionArea
                    >
                    </CardActionArea>


                    <CardActions disableActionSpacing>
                        <IconButton
                            className = { 
                                classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expandedMain,
                            })}
                            onClick = { this.handleExpandMainClick }
                            aria-expanded = { this.state.expandedMain }
                            aria-label = 'Карта'
                        >
                            <ExpandMore />
                        </IconButton>
                    </CardActions>

                    <Collapse in = { this.state.expandedMain } timeout = "auto" unmountOnExit>
                        <CardMedia
                        >
                            <Maps 
                                lat = { this.props.main_office.lat}
                                lng = { this.props.main_office.lng}
                                zoom = { this.props.zoom }
                                isMarkerShown
                            />
                        </CardMedia>
                    </Collapse>
                    <CardMedia
                        component = 'img'
                        image = { bvhMainOfficeBuild }
                        title = 'Центральный офис'
                        className = {
                            classes.media
                        }
                    />
                    <CardContent
                        style = { сard.text }
                    >
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Адрес:</strong>
                        </p>
                        <p style = {{ margin: '8px auto 8px', paddingLeft: '4rem', }}>
                            352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196<br />
                            адрес электронной почты: <a href="mailto:br_teploseti@mail.ru">br_teploseti@mail.ru</a>
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>График работы:</strong>
                        </p>
                        <p style = {{ margin: '8px auto 8px', paddingLeft: '4rem', }}>
                            Понедельник-пятница с 08-00 до 17-00, перерыв с 12-00 до 13-00<br />
                            Выходной: Суббота, Воскресенье
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Диспетчерская служба</strong>: 
                        </p>
                        <p style = {{ margin: '8px auto 8px', paddingLeft: '4rem', }}>
                            8(86156) 35-117<br />
                            Круглосуточно, без перерыва и выходных.
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Приемная директора</strong>: 8(86156) 31-194<br />
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Главный инженер</strong>:
                        </p>
                        <p style = {{ margin: '8px auto 8px', paddingLeft: '4rem', }}>
                            8(86156) 31-194<br />
                            Прием населения: Понедельник, Пятница с 08-00 до 12-00.
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Производственно-технический отдел</strong>: 
                        </p>
                        <p style = {{ margin: '8px auto 8px', paddingLeft: '4rem', }}>
                            8(86156) 21-809<br />
                            Прием населения: Понедельник, Пятница с 08-00 до 16-00, перерыв с 12-00 до 13-00
                        </p>
                        <div style = {{ margin: '8px auto 8px', paddingLeft: '9rem', }}>
                        </div>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Вывоз жидких коммунальных стоков</strong>: 8(86156) 35-117
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Лаборатория</strong>: 8(86156) 31-010
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Юридический отдел</strong>: 8(86156) 21-809
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Бухгалтерия</strong>: 8(86156) 35-200
                        </p>
                        <p style = {{ margin: '8px auto 8px' }}>
                            <strong>Отдел кадров</strong>: 8(86156) 31-194
                        </p>
                        <PdfLink 
                            href = { rekvisity_ooo_bvh } 
                            label = 'Реквизиты ООО «Брюховецкое водопроводное хозяйство»'
                        />
                        <PdfLink 
                            href = { rekvisity_ooo_boos } 
                            label = 'Реквизиты ООО «Брюховецкое предприятие отвода и очистки стоков»'
                        />

                    </CardContent>
                </Card>
                <Card
                    square = { true }
                    style = { сard }
                >
                    <CardHeader
                        title = 'Абонентский отдел'
                        titleTypographyProps = { сard.subtitle1 }
                        subheader = 'Карта'
                        subheaderTypographyProps = { сard.subtitle2 }
                    />
                </Card>

                    <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon = { <ExpandMore /> }>
                                <CardHeader
                                    title = 'Центральный офис'
                                    titleTypographyProps = { сard.subtitle1 }
                                    subheader = 'Карта'
                                    subheaderTypographyProps = { сard.subtitle2 }
                                />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Maps 
                                    lat = { this.props.main_office.lat}
                                    lng = { this.props.main_office.lng}
                                    zoom = { this.props.zoom }
                                    isMarkerShown
                                />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>   

                <Card
                    onExpandChange = { this.handleExpandChange }
                    square = { true }
                    style = { сard }
                >
                    <CardHeader
                        title = "Центральный офис"
                        titleTypographyProps = { сard.subtitle1 }
                        subheader = "Карта"
                        subheaderTypographyProps = { сard.subtitle2 }
                    />
                </Card>

                <Card
                    square = { true }
                    expanded = { this.state.expandedAbon }
                    onExpandChange = { this.handleExpandChangeAbon }
                >
                    <CardHeader
                        title = "Абонентский отдел"
                        titleStyle = { сard.header1 }
                        subtitle = "Карта"
                    />
                </Card>

                    <Collapse in={ this.state.expandedAbon } timeout="auto" unmountOnExit>
                        <CardMedia
                        >
                            <Maps
                                lat = { this.props.abon_office.lat}
                                lng = { this.props.abon_office.lng}
                                zoom = { this.props.zoom }
                                isMarkerShown
                            />
                        </CardMedia>
                    </Collapse>
                    <CardMedia
                        style= {{
                            width: '40%',
                            margin: '0 auto'
                        }}
                    >
                        <img 
                            src = { bvhAbonentsOfficeBuild } 
                        />
                    </CardMedia>
                    <CardContent 
                        style = { сard.text }
                    >
                        <p><strong>Адрес:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>352750, Краснодарский край, ул. Советская, 56, здание БТИ<br /></p>
                        <p><strong>Телефон:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}><strong>8 (86156) 22-257</strong><br /></p>
                        <p><strong>График работы:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>Понедельник-пятница с 08-00 до 16-00 перерыв с 11-00 до 12-00<br />
                        Выходной: Суббота и Воскресенье</p>
                    </CardContent>

                    <Collapse in = { this.state.expandedMain } timeout = "auto" unmountOnExit>
                        <CardMedia
                        >
                            <Maps 
                                lat = { this.props.main_office.lat}
                                lng = { this.props.main_office.lng}
                                zoom = { this.props.zoom }
                                isMarkerShown
                            />
                        </CardMedia>
                    </Collapse>
                    <CardMedia
                        style = {{
                            width: '40%',
                            margin: '0 auto'
                        }}
                    >
                        <img 
                            src = { bvhMainOfficeBuild } 
                        />
                    </CardMedia>
                    <CardContent
                        style = { сard.text }
                    >
                        <p><strong>Адрес:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196<br />
                        адрес сайта: <a href = "http://www.bruvodokanal.ru">http://www.bruvodokanal.ru</a><br />
                        адрес электронной почты: <a href="mailto:br_teploseti@mail.ru">br_teploseti@mail.ru</a></p>
                        <p><strong>График работы:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>Понедельник-пятница с 08-00 до 17-00, перерыв с 12-00 до 13-00<br />
                            Выходной: Суббота и Воскресенье<br />
                        </p>
                        <p>
                            <strong>Диспетчерская служба</strong>: 
                        </p>
                        <p style = {{ paddingLeft: '4rem', }}>
                            8(86156) 35-117<br />
                            Круглосуточно, без перерыва и выходных.
                        </p>
                        <p>
                            <strong>Приемная директора</strong>: 
                        </p>
                        <p style = {{ paddingLeft: '4rem', }}>
                            8(86156) 31-194<br />
                            Прием населения: каждый XXX с XX-00 до XX-00.
                        </p>
                        <p>
                            <strong>Производственно-технический отдел</strong>: 
                        </p>
                        <p style = {{ paddingLeft: '4rem', }}>
                            8(86156) 21-809<br />
                            Прием населения:<br />
                            <div style = {{ paddingLeft: '9rem', }}>Понедельник с 08-00 до 16-00, перерыв с 12-00 до 13-00<br />
                                    Пятница с 08-00 до 16-00, перерыв с 12-00 до 13-00.<br />
                            </div>
                        </p>
                        <p>
                            <strong>Вывоз жидких коммунальных стоков</strong>: 8(86156)
                        </p>
                        <p>
                            <strong>Лаборатория</strong>: 8(86156) 31-010
                        </p>
                        <p>
                            <strong>Юридический отдел</strong>: 8(86156) 21-809
                        </p>
                        <p>
                            <strong>Бухгалтерия</strong>: 8(86156) 35-200
                        </p>
                        <p>
                            <strong>Отдел кадров</strong>: 8(86156) 31-194
                        </p>
                        <p>
                            <strong>Главный инженер</strong>:
                        </p>
                        <p style = {{ paddingLeft: '4rem', }}>
                            8(86156) 31-194<br />
                            Прием населения: XXX с 08-00 до 10-00.
                        </p>
                        <PdfLink 
                            href = { rekvisity_ooo_bvh } 
                            label = 'Реквизиты ООО «Брюховецкое водопроводное хозяйство»'
                        />
                        <PdfLink 
                            href = { rekvisity_ooo_boos } 
                            label = 'Реквизиты ООО «Брюховецкое предприятие отвода и очистки стоков»'
                        />
                    </CardContent>

*/