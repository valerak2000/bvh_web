import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import CardHeader from '../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

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
        const { ul, li, RedLine, textIdent } = this.props.theme;

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
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>ООО «Брюховецкое водопроводное хозяйство» (ООО «БВХ»)</strong><br />
                    </Typography>
                    <div 
                        style = {{ 
                            display: 'block',
                            margin: '0 auto',
                        }}
                    >
                        <div>
                            <ul style = {{ paddingLeft: '4rem', margin: 'auto' }}>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/elektronnaya_priemnaya">Электронная приемная</a></li>
                                <li><a href="/blackouts">Отключения</a></li>
                                <li><a href="/available_capacity_map">Карта доступной мощности</a></li>
                                <li><a href="/map">Карта сайта</a></li>
                            </ul>        
                        </div>
                        <div>
                        <Typography
                            variant = 'body1'
                            color = 'textSecondary'
                            className = { classes.text }
                        >
                            <strong>О компании</strong><br />
                        </Typography>
                            <ul style = {{ paddingLeft: '4rem', margin: 'auto' }}>
                                <li><a href="/about">Общая информация</a></li>
                                <li><a href="/about/leadership">Руководство компании</a></li>
                                <li><a href="/about/contacts">Контакты</a></li>
                                <li><a href="/about/vacancies">Вакансии</a></li>
                                <li><a href="/about/history">Наша история</a></li>
                                <li><a href="/about/zakupki_raskrytie_informacii">Закупки и раскрытие информации</a></li>
                            </ul>        
                        </div>
                        <div>
                        <Typography
                            variant = 'body1'
                            color = 'textSecondary'
                            className = { classes.text }
                        >
                            <strong>Абонентам</strong><br />
                        </Typography>
                            <ul style = {{ paddingLeft: '4rem', margin: 'auto' }}>
                                <li>
                                    Подключение
                                    <ul style = { ul }>
                                        <li><a href="/customers/connection/connection_holvodosnabjenie">Холодное водоснабжение</a></li>
                                        <li><a href="/customers/connection/connection_vodootvedenie">Водоотведение</a></li>
                                    </ul>                                
                                </li>
                                <li>
                                    Физические лица
                                    <ul style = { ul }>
                                        <li><a href="/customers/fizlica/zaklyuchenie_dogovorov_holvod_fizlica">Заключение договоров на холодное водоснабжение</a></li>
                                        <li><a href="/customers/fizlica/zaklyuchenie_dogovorov_vodootved_fizlica">Заключение договоров на водоотведение</a></li>
                                        <li><a href="/customers/fizlica/peredacha_pokazaniy">Передача показаний счетчиков</a></li>
                                        <li><a href="/customers/fizlica/pribory_ucheta">Приборы учета</a></li>
                                    </ul>
                                </li>
                                <li>
                                    Юридические лица
                                    <ul style = { ul }>
                                        <li><a href="/customers/urlica/zaklyuchenie_dogovorov_holvod_urlica">Заключение договоров на холодное водоснабжение</a></li>
                                        <li><a href="/customers/urlica/zaklyuchenie_dogovorov_vodootved_urlica">Заключение договоров на водоотведение</a></li>
                                        <li><a href="/customers/urlica/peredacha_pokazaniy">Передача показаний счетчиков</a></li>
                                    </ul>
                                </li>
                                <li><a href="/customers/regulatory_doc">Нормативные документы</a></li>
                                <li><a href="/customers/tarifs">Тарифы</a></li>
                                <li><a href="/customers/debtors">Должники</a></li>
                            </ul>        
                        </div>
                        <div>
                        <Typography
                            variant = 'body1'
                            color = 'textSecondary'
                            className = { classes.text }
                        >
                            <strong>Новости</strong><br />
                        </Typography>
                            <ul style = {{ paddingLeft: '4rem', margin: 'auto' }}>
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

export default withStyles(styles, { name: 'muiMapView', flip: false, withTheme: true })(MapView);
/*
                                        <li><a href="/customers/connection/poluchenie_tekhnicheskikh_usloviy">Получение технических условий</a></li>
                                        <li><a href="/customers/connection/oformlenie_dogovora_o_podklyuchenii">Оформление договора о подключении</a></li>
                                        <li><a href="/customers/connection/oformlenie_aktov_o_podklyuchenii">Оформление актов технической приемки</a></li>
                                        <li><a href="/customers/urlica/inspekcia_vodnyh_resursov">Инспекция водных ресурсов</a></li>

                                <li>
                                    Услуги
                                    <ul style = { ul }>
                                        <li><a href="/customers/services/vyvoz_zhidkih_kommunalnyh_stokov">Вывоз жидких коммунальных стоков</a></li>
                                        <li><a href="/customers/services/preyskurant_uslug_dlya_fizicheskih_lic">Прейскурант услуг для физических лиц</a></li>
                                        <li><a href="/customers/services/preyskurant_uslug_dlya_yuridicheskih_lic">Прейскурант услуг для юридических лиц</a></li>
                                        <li><a href="/customers/services/prochie_uslugi">Прочие услуги</a></li>
                                    </ul>
                                </li>

*/
