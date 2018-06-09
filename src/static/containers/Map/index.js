import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import UnderConstruct from '../../components/UnderConstruct';

class MapView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    render() {
        return (
            <Card
                style = { this.props.muiTheme.app.сard }
            >
                <CardTitle
                    title = 'Карта сайта'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText>
                    <div 
                        style = {{ 
                            display: 'flex',
                            margin: '0 auto',
                        }}
                    >
                        <div>
                            <br />
                            <br />
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/home/elektronnaya_priemnaya">Электронная приемная</a></li>
                                <li><a href="/home/blackouts">Отключения</a></li>
                                <li><a href="/home/available_capacity_map">Карта доступной мощности</a></li>
                                <li><a href="/home/map">Карта сайта</a></li>
                            </ul>        
                        </div>
                        <div>
                            <h4>О компании</h4>
                            <ul>
                                <li><a href="/about">Общая информация</a></li>
                                <li><a href="/about/leadership">Руководство компании</a></li>
                                <li><a href="/about/contacts">Контакты</a></li>
                                <li><a href="/about/vacancies">Вакансии</a></li>
                                <li><a href="/about/history">Наша история</a></li>
                                <li><a href="/about/zakupki_raskrytie_informacii">Закупки и раскрытие информации</a></li>
                            </ul>        
                        </div>
                        <div>
                            <h4>Абонентам</h4>
                            <ul>
                                <li>
                                    Подключение
                                    <ul>
                                        <li><a href="/customers/connection/poluchenie_tekhnicheskikh_usloviy">Получение технических условий</a></li>
                                        <li><a href="/customers/connection/oformlenie_dogovora_o_podklyuchenii">Оформление договора о подключении</a></li>
                                        <li><a href="/customers/connection/oformlenie_aktov_o_podklyuchenii">Оформление актов технической приемки</a></li>
                                    </ul>
                                </li>
                                <li>
                                    Физические лица
                                    <ul>
                                        <li><a href="/customers/fizlica/poluchenie_tekhnicheskikh_usloviy">Заключение договоров на холодное водоснабжение и водоотведение</a></li>
                                        <li><a href="/customers/fizlica/peredacha_pokazaniy">Передача показаний счетчиков</a></li>
                                        <li><a href="/customers/fizlica/oformlenie_aktov_o_podklyuchenii">Приборы учета</a></li>
                                    </ul>
                                </li>
                                <li>
                                    Юридические лица
                                    <ul>
                                        <li><a href="/customers/urlica/poluchenie_tekhnicheskikh_usloviy">Заключение договоров на холодное водоснабжение и водоотведение</a></li>
                                        <li><a href="/customers/urlica/oformlenie_aktov_o_podklyuchenii">Инспекция водных ресурсов</a></li>
                                        <li><a href="/customers/urlica/peredacha_pokazaniy">Передача показаний счетчиков</a></li>
                                    </ul>
                                </li>
                                <li><a href="/customers/regulatory_doc">Нормативные документы</a></li>
                                <li><a href="/customers/tarifs">Тарифы</a></li>
                                <li>
                                    Услуги
                                    <ul>
                                        <li><a href="/customers/services/vyvoz_zhidkih_kommunalnyh_stokov">Вывоз жидких коммунальных стоков</a></li>
                                        <li><a href="/customers/services/laboratornyy_analiz_vody">Лабораторный анализ воды</a></li>
                                        <li><a href="/customers/services/preyskurant_uslug_dlya_fizicheskih_lic">Прейскурант услуг для физических лиц</a></li>
                                        <li><a href="/customers/services/preyskurant_uslug_dlya_yuridicheskih_lic">Прейскурант услуг для юридических лиц</a></li>
                                        <li><a href="/customers/services/prochie_uslugi">Прочие услуги</a></li>
                                    </ul>
                                </li>
                                <li><a href="/customers/debtors">Должники</a></li>
                            </ul>        
                        </div>
                        <div>
                            <h4>Новости</h4>
                            <ul>
                                <li><a href="/news">Новости</a></li>
                                <li><a href="/news/smi_o_nashey_rabote">СМИ о нашей работе</a></li>
                            </ul>        
                        </div>
                    </div>
                </CardText>
            </Card>
        );
    }
}

/*
*/

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(MapView));
export { MapView as MapViewNotConnected };
