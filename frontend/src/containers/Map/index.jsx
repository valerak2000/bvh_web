import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../components/Card/CardHeaderImpl.jsx';

class MapView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Карта сайта'
                    { ...this.props }
                />
                <CardContent>
                    <div 
                        style = {{ 
                            display: 'block',
                            margin: '0 auto',
                        }}
                    >
                        <div>
                            <h4>ООО «Брюховецкое водопроводное хозяйство»</h4>
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/elektronnaya_priemnaya">Электронная приемная</a></li>
                                <li><a href="/blackouts">Отключения</a></li>
                                <li><a href="/available_capacity_map">Карта доступной мощности</a></li>
                                <li><a href="/map">Карта сайта</a></li>
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
                                        <li><a href="/customers/fizlica/zaklyuchenie_dogovorov">Заключение договоров на холодное водоснабжение и водоотведение</a></li>
                                        <li><a href="/customers/fizlica/peredacha_pokazaniy">Передача показаний счетчиков</a></li>
                                        <li><a href="/customers/fizlica/pribory_ucheta">Приборы учета</a></li>
                                    </ul>
                                </li>
                                <li>
                                    Юридические лица
                                    <ul>
                                        <li><a href="/customers/urlica/zaklyuchenie_dogovorov">Заключение договоров на холодное водоснабжение и водоотведение</a></li>
                                        <li><a href="/customers/urlica/peredacha_pokazaniy">Передача показаний счетчиков</a></li>
                                        <li><a href="/customers/urlica/inspekcia_vodnyh_resursov">Инспекция водных ресурсов</a></li>
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
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiMapView', flip: false, withTheme: true })(MapView);
//export { MapView as MapViewNotConnected };
