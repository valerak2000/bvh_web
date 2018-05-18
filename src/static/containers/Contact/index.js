import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
//import Paper from 'material-ui/Paper';
//import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class ContactView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
          expanded: true,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded} );
    };
    
    render() {
        return (
            <Card
                expanded = { this.state.expanded }
                onExpandChange = { this.handleExpandChange }
                style = { this.props.muiTheme.app.сard }
            >
                <CardTitle
                    title = 'Контакты'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardHeader
                    title = "ООО «Брюховецкое водопроводное хозяйство»"
                    subtitle = "ООО «БВХ»"
                    actAsExpander = { true }
                    showExpandableButton = { true }
                >
                </CardHeader>
                <CardText expandable = { true }>
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
                </CardText>
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
                <CardTitle
                    title = 'ООО «Брюховецкое водопроводное хозяйство»'
                    subtitle = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                />

.one-sidebar #main-content {
    width: 880px;
    float: left;
}
<main id="main-content">


                            <h1>Контакты</h1>




          <div class="region region-content">
    <div id="node-39" class="node node-page node-full clearfix" about="/Kompaniya/Kontakty" typeof="sioc:Item foaf:Document">

            <span property="dc:title" content="Контакты" class="rdf-meta element-hidden"></span>

  <div class="content clearfix">

<div class="field field-name-body field-type-text-with-summary field-label-hidden">
    <div class="field-items">
          <div class="field-item even" property="content:encoded"><p><strong>Почтовый адрес и адрес фактического нахождения органов управления ООО «Краснодар Водоканал»:</strong></p>
<p>350062,  Краснодарский край, г. Краснодар, ул. Каляева, 198,<br>
адрес сайта: <a href="http://www.krasnodarvodokanal.ru">www.krasnodarvodokanal.ru</a><br>
адрес электронной почты: <a href="mailto:krn_sec@rosvodokanal.ru">krn_sec@rosvodokanal.ru</a></p>
<p>Телефон:</p>
<p><strong>8 (861) 220-29-87</strong> — приемная<br><strong>8 (861) 220-28-38</strong> — диспетчер</p>
<p><strong>Режим работы ООО «Краснодар Водоканал»:</strong></p>
<p>Понедельник-четверг с 08-00 до 17-00 перерыв с 12-00 до 12-48.<br>
Пятница с 08-00 до 16-00 перерыв с 12-00 до 12-48.</p>
<p><strong>Коммерческая дирекция ООО «Краснодар Водоканал», г. Краснодар, ул. Каляева, 259:</strong></p>
<p>Понедельник-четверг с 08-00 до 17-00 перерыв с 12-00 до 12-48.<br>
Пятница с 08-00 до 16-00 перерыв с 12-00 до 12-48.</p>
<!--p><p><strong>Приемные дни для граждан:</strong></p>
<p>Понедельник, вторник, четверг с 09-00 до 16-00, перерыв с 12-00 до 13-00;</br><br />
Пятница с 09-00 до 15-00, перерыв с 12-00 до 13-00.</br-->
<p><strong>Диспетчерская служба ООО «Краснодар Водоканал»:</strong></p>
<p>круглосуточно, без перерыва и выходных.</p>
</div>
      </div>
</div>
  </div>



</div>  </div>


    </main>
*/