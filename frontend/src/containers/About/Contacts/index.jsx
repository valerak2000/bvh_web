import React, { Component } from 'react';
//import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
//import Divider from 'material-ui/Divider';

import { Maps } from '../../../components/Maps';
import PdfLink from '../../../components/PdfLink';

const bvhMainOfficeBuild = '/static/images/main_office.jpg';
const bvhAbonentsOfficeBuild = '/static/images/abon_office.jpg';
const rekvisity_ooo_bvh = '/static/files/media/rekvisity_ooo_bvh.pdf';
const rekvisity_ooo_boos = '/static/files/media/rekvisity_ooo_boos.pdf';

class ContactsView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
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
            expanded: false,
            expandedAbon: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded} );
    };

    handleExpandChangeAbon = (expanded) => {
        this.setState({ expandedAbon: expanded} );
    };

    render() {
        const { file, numPages } = this.state;

        return (
            <Card
                style = { this.props.muiTheme.app.сard }
            >
                <CardTitle
                    title = 'Контакты'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardHeader
                    title = "ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»"
                    titleStyle = { this.props.muiTheme.app.сard.header }
                />
                <CardHeader
                    title = "ООО «Брюховецкое предприятие отвода и очистки стоков», ООО «БООС»"
                    titleStyle = { this.props.muiTheme.app.сard.header }
                />
                <Card
                    expanded = { this.state.expanded }
                    onExpandChange = { this.handleExpandChange }
                >
                    <CardHeader
                        title = "Центральный офис"
                        titleStyle = { this.props.muiTheme.app.сard.header1 }
                        subtitle = "Карта"
                        actAsExpander = { true }
                        showExpandableButton = { true }
                    />
                    <CardMedia
                        expandable = { true }
                    >
                        <Maps 
                            lat = { this.props.main_office.lat}
                            lng = { this.props.main_office.lng}
                            zoom = { this.props.zoom }
                            isMarkerShown
                        />
                    </CardMedia>
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
                    <CardText 
                        expandable = { false }
                        style = { this.props.muiTheme.app.сard.text }
                    >
                        <p><strong>Адрес:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196<br />
                        адрес сайта: <a href = "http://www.bruvodokanal.ru">http://www.bruvodokanal.ru</a><br />
                        адрес электронной почты: <a href="mailto:br_teploseti@mail.ru">br_teploseti@mail.ru</a></p>
                        <p><strong>График работы:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>Понедельник-пятница с 08-00 до 16-00 перерыв с 12-00 до 13-00<br />
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
                            Прием населения: XXX с 08-00 до 16-00.
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
                            Прием населения: XXX с 08-00 до 16-00.
                        </p>
                        <PdfLink 
                            href = { rekvisity_ooo_bvh } 
                            label = "Реквизиты ООО «Брюховецкое водопроводное хозяйство»"
                        />
                        <PdfLink 
                            href = { rekvisity_ooo_boos } 
                            label = "Реквизиты ООО «Брюховецкое предприятие отвода и очистки стоков»"
                        />
                    </CardText>
                </Card>

                <Card
                    expanded = { this.state.expandedAbon }
                    onExpandChange = { this.handleExpandChangeAbon }
                >
                    <CardHeader
                        title = "Абонентский отдел"
                        titleStyle = { this.props.muiTheme.app.сard.header1 }
                        subtitle = "Карта"
                        actAsExpander = { true }
                        showExpandableButton = { true }
                    />
                    <CardMedia
                        expandable = { true }
                    >
                        <Maps
                            lat = { this.props.abon_office.lat}
                            lng = { this.props.abon_office.lng}
                            zoom = { this.props.zoom }
                            isMarkerShown
                        />
                    </CardMedia>
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
                    <CardText 
                        expandable = { false }
                        style = { this.props.muiTheme.app.сard.text }
                    >
                        <p><strong>Адрес:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>352750, Краснодарский край, ул. Советская, 56, здание БТИ<br /></p>
                        <p><strong>Телефон:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}><strong>8 (86156) 22-257</strong><br /></p>
                        <p><strong>График работы:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>Понедельник-пятница с 08-00 до 16-00 перерыв с 11-00 до 12-00<br />
                        Выходной: Суббота и Воскресенье</p>
                    </CardText>
                </Card>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(ContactsView));
export { ContactsView as ContactsViewNotConnected };

/*
*/