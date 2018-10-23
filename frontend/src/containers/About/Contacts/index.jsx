import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Maps } from '../../../components/Maps';
import PdfLink from '../../../components/PdfLink';

const bvhMainOfficeBuild = '/static/images/main_office.jpg';
const bvhAbonentsOfficeBuild = '/static/images/abon_office.jpg';
const rekvisity_ooo_bvh = '/static/files/media/rekvisity_ooo_bvh.pdf';
const rekvisity_ooo_boos = '/static/files/media/rekvisity_ooo_boos.pdf';

const styles = theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
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
        };
    }

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
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon = { <ExpandMoreIcon /> }>
                            <CardHeader
                                title = 'Центральный офис'
                                titleTypographyProps = { сard.subtitle1 }
                                subheader = 'Карта'
                                subheaderTypographyProps = { сard.subtitle2 }
                            />
                            <br />
                            <CardMedia
                                image = { bvhMainOfficeBuild }
                                title = 'Центральный офис'
                                style = {{
                                    width: '40%',
                                    margin: '0 auto'
                                }}
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
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiContactsView', flip: false, withTheme: true })(ContactsView);
//export { ContactsView as ContactsViewNotConnected };

/*
                                <img 
                                    src = { bvhMainOfficeBuild } 
                                />
                            </CardMedia>

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

                    <Collapse in = { this.state.expanded } timeout = "auto" unmountOnExit>
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