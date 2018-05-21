import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';

import bvhMainOfficeBuild from '../../images/main_office.jpg';
import bvhAbonentsOfficeBuild from '../../images/abon_office.jpg';

class ContactView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
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
                <Card
                    expanded = { this.state.expanded }
                    onExpandChange = { this.handleExpandChange }
                >
                    <CardHeader
                        title = "Центральный офис"
                        titleStyle = { this.props.muiTheme.app.сard.header1 }
                        subtitle = "Карта"
                        avatar = { bvhMainOfficeBuild }
                        actAsExpander = { true }
                        showExpandableButton = { true }
                    />
                    <CardMedia
                        expandable = { true }
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.209835435436!2d38.98833121557946!3d45.7870237198652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e54fbcf409cbbf%3A0x641f391e0453da0f!2z0YPQuy4g0J4uINCa0L7RiNC10LLQvtCz0L4sIDE5Niwg0JHRgNGO0YXQvtCy0LXRhtC60LDRjywg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1Mjc1Mw!5e0!3m2!1sru!2sru!4v1526885087979"
                            frameBorder="0"
                            style= {{ border: 0 }}
                            allowFullScreen
                            width="600" 
                            height="450"
                        >
                        </iframe>                
                    </CardMedia>
                    <CardMedia>
                        <img 
                            src = { bvhMainOfficeBuild } 
                            style = {{
                                width : '30%', 
                                minWidth : '30%', 
                                height: 'inherit',
                                objectFit: 'contain',
                                margin: '0 auto auto auto',
                            }}
                        />
                    </CardMedia>
                    <CardText 
                        expandable = { false }
                        style = { this.props.muiTheme.app.сard.text }
                    >
                        <p><strong>Адрес:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>352750, Краснодарский край, ст. Брюховецкая, ул. О. Кошевого, 196<br />
                        адрес сайта: <a href="http://www.brhvh.ru">http://www.brhvh.ru</a><br />
                        адрес электронной почты: <a href="mailto:br_teploseti@mail.ru">br_teploseti@mail.ru</a></p>
                        <p><strong>Телефон:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}><strong>8 (86156) 31-194</strong> — приемная<br />
                        <strong>8 (86156) 35-200</strong> — бухгалтерия<br />
                        <strong>8 (86156) 35-117</strong> — диспетчер</p>
                        <p><strong>Режим работы:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>Понедельник-пятница с 08-00 до 16-00 перерыв с 12-00 до 13-00<br />
                            Выходной: Суббота и Воскресенье<br />
                            <strong>Диспетчерская служба круглосуточно, без перерыва и выходных</strong>
                        </p>
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
                        avatar = { bvhAbonentsOfficeBuild }
                        actAsExpander = { true }
                        showExpandableButton = { true }
                    />
                    <CardMedia
                        overlay = {
                            <CardTitle
                                title = "ООО «Брюховецкое водопроводное хозяйство», ООО «БВХ»"
                                subtitle = "Абонентский отдел"
                            />
                        }
                        expandable = { true }
                    >
                        <img src = { bvhAbonentsOfficeBuild } alt="" />
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.2522789656828!2d39.00561431558006!3d45.80620571857822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e54f6dbd4e3a7f%3A0x1911874af29bb874!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPLCA1Niwg0JHRgNGO0YXQvtCy0LXRhtC60LDRjywg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1Mjc1MA!5e0!3m2!1sru!2sru!4v1526885808506" 
                            frameBorder="0"
                            style= {{ border: 0 }}
                            allowFullScreen
                            width="600" 
                            height="450"
                        >
                        </iframe>
                    </CardMedia>
                    <CardText 
                        expandable = { false }
                        style = { this.props.muiTheme.app.сard.text }
                    >
                        <p><strong>Адрес:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}>352750, Краснодарский край, ул. Советская, 56, здание БТИ<br /></p>
                        <p><strong>Телефон:</strong></p>
                        <p style = {{ paddingLeft: '4rem', }}><strong>8 (86156) 22-257</strong><br /></p>
                        <p><strong>Режим работы:</strong></p>
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

export default muiThemeable()(connect(mapStateToProps)(ContactView));
export { ContactView as ContactViewNotConnected };

/*
            <Card
                expanded = { this.state.expanded }
                initiallyExpanded = { false }
                onExpandChange = { this.handleExpandChange }
                style = { this.props.muiTheme.app.сard }
            >
                <CardTitle
                    title = 'ООО «Брюховецкое водопроводное хозяйство»'
                    subtitle = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                />

                    <strong>Юридический адрес:</strong> 352750, Краснодарский край, ст. Брюховецкая, ул. О. Кошевого, 196
                    <p><strong>Директор:</strong> Ляшенко Александр Николаевич<br/>
                    <strong>Главный бухгалтер:</strong> Романова Ольга Григорьевна</p>
                    <h4><strong>Телефоны</strong></h4>
                    <ul>
                        <li><strong>Круглосуточный диспетчер</strong>&nbsp; 8(86156) 35-117</li>
                        <li><strong>Абонентский отдел</strong>&nbsp; 8(86156) 222-57</li>
                        <li><strong>Бухгалтерия</strong> 8(86156) 35-200</li>
                        <li><strong>Секретарь/факс&nbsp;</strong>8(86156) 31-194</li>
                    </ul>
                    <address>
                        <strong>адрес сайта:</strong> <a href = "http://www.brhvh.ru">http://www.brhvh.ru</a>
                        <br/><strong>адрес электронной почты:</strong> <a href = "mailto:br_teploseti@mail.ru">br_teploseti@mail.ru</a>
                    </address>
                    <h4>Коды</h4>
                    <ul>
                        <li><strong>ИНН</strong> 2327009703</li>
                        <li><strong>КПП</strong> 232701001</li>
                        <li><strong>ОГРН</strong> 105 231 529 0 961</li>
                        <li><strong>ОГРН</strong> 105 231 529 0 961</li>
                        <li><strong>ОКПО</strong> 950 79 317</li>
                        <li><strong>ОКАТО</strong> 032 108 07 001</li>
                        <li><strong>ОКТМО</strong> 036 10 407</li>
                        <li><strong>ОКОГУ</strong> 2 100 14</li>
                        <li><strong>ОКФС</strong> 16</li>
                        <li><strong>ОКОПФ</strong> 12 165</li>
                        <li><strong>ОКВЭД</strong> 36.00.1</li>
                    </ul>
                    <h4>Банковские реквизиты</h4>
                    <ul>
                        <li>ПАО «Крайинвестбанк» г.Краснодар</li>
                        <li><strong>р/с</strong> 407 028 103 00 29 00 10 119</li>
                        <li><strong>к/с</strong> 301 018 105 0000 0000 516</li>
                        <li><strong>БИК</strong> 040 349 516</li>
                    </ul>
*/