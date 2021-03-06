import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

class ConnectionVodootvedView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;
        const { ul, li } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Подключение к водоотведению'
                    subheader = 'ООО «Брюховецкое предприятие отвода и очистки стоков»'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Заявитель, планирующий осуществить подключение (технологическое присоединение) объекта капитального строительства к централизованной системе водоотведения, обращается в ООО «БООС» с заявлением о выдаче технических условий на подключение (технологическое присоединение) объекта капитального строительства к централизованным системам водоотведения.
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Для заключения договора о подключении и получения технических условий подключения заявитель направляет в ООО «БООС» заявление о подключении, содержащее полное и сокращенное наименования заявителя (для физических лиц - фамилия, имя, отчество), его местонахождение и почтовый адрес, наименование подключаемого объекта и кадастровый номер земельного участка, на котором располагается подключаемый объект, данные об общей подключаемой нагрузке с приложением следующих документов:
                    </Typography>
                    <ul style = { ul }>
                        <li style = { li }>
                            Копии учредительных документов, а также документы, подтверждающие полномочия лица, подписавшего заявление
                        </li>
                        <li style = { li }>
                            Нотариально заверенные копии правоустанавливающих документов на земельный участок
                        </li>
                        <li style = { li }>
                            Ситуационный план расположения объекта с привязкой к территории населенного пункта
                        </li>
                        <li style = { li }>
                            Топографическая карта участка в масштабе 1:500 (со всеми наземными и подземными коммуникациями и сооружениями), согласованная с эксплуатирующими организациями
                        </li>
                        <li style = { li }>
                            Информация о сроках строительства (реконструкции) и ввода в эксплуатацию строящегося (реконструируемого) объекта
                        </li>
                        <li style = { li }>
                            Баланс водопотребления и водоотведения подключаемого объекта с указанием целей использования холодной воды и распределением объемов подключаемой нагрузки по целям использования, в том числе на пожаротушение, периодические нужды, заполнение и опорожнение бассейнов, прием поверхностных сточных вод
                        </li>
                        <li style = { li }>
                            Сведения о составе и свойствах сточных вод, намеченных к отведению в централизованную систему водоотведения
                        </li>
                        <li style = { li }>
                            Сведения о назначении объекта, высоте и об этажности зданий, строений, сооружений
                        </li>
                    </ul>
                    <br />
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        ООО «БООС» в течение 10 рабочих дней рассматривает полученные документы и проверяет их на соответствие указанному выше перечню и соответствие представленного баланса водопотребления и водоотведения назначению объекта, высоте и этажности зданий, строений и сооружений. ООО «БООС» определяет, к какому объекту (участку сети) централизованной системы водоотведения должно осуществляться подключение (технологическое присоединение), и оценивает техническую возможность подключения (технологического присоединения) и наличие мероприятий, обеспечивающих такую техническую возможность, в инвестиционной программе организации.
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        В случае некомплектности представленных документов или несоответствия представленного баланса водопотребления и водоотведения назначению объекта, высоте и этажности зданий, строений и сооружений ООО «БООС» отказывает заявителю в принятии документов к рассмотрению и в течение 10 рабочих дней после получения таких документов возвращает их заявителю с указанием причин отказа в рассмотрении, в том числе направляет заявителю предложения по корректировке баланса водопотребления и водоотведения.
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        В случае принятия документов заявителя к рассмотрению и наличия технической возможности подключения (технологического присоединения), а также при условии наличия в инвестиционных программах ООО «БООС мероприятий, обеспечивающих техническую возможность подключения (технологического присоединения), ООО «БООС» в течение 30 календарных дней направляет заявителю подписанный договор о подключении с приложением условий подключения (технологического присоединения) и расчета платы за подключение (технологическое присоединение).
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Проект договора о подключении должен быть подписан заявителем в течение 30 календарных дней после его получения от ООО «БООС». Для заключения договора о подключении по истечении этого срока, но в течение срока действия технических условий, заявитель вправе повторно обратиться с заявлением о подключении (технологическом присоединении) в ООО «БООС», при этом повторного представления документов, если фактические обстоятельства на день подачи нового заявления по сравнению с указанными в представленных ранее документах не изменились и являются актуальными на день повторного представления, не требуется. ООО «БООС» представляет заявителю подписанный проект договора о подключении в течение 20 дней со дня получения повторного обращения. Заявитель подписывает 2 экземпляра проекта договора о подключении и направляет 1 экземпляр в адрес ООО «БООС» с приложением к нему документов, подтверждающих полномочия лица, подписавшего договор о подключении, если ранее такие документы не представлялись.
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Необоснованный отказ в заключении договора на подключение (технологическое присоединение) объекта капитального строительства к централизованной системе водоснабжения не допускается.
                    </Typography>
                    <br />
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Примечание:</strong> Настоящий порядок разработан в соответствии с №416-ФЗ «О водоснабжении и водоотведении» от 07.12.2011 года, Правилами холодного водоснабжения и водоотведения, утвержденными Постановлением Правительства РФ от 29.07.2013 года, № 644.
                    </Typography>
                    <Divider />
                    <FileLink
                        key = 'zayavpodklbvh'
                        href = '/static/files/media/potrebiteliam/Заявление на подключение - водоотведение.docx'
                        label = 'Заявление на подключение'
                    />
                    <FileLink
                        key = 'dogovorpodklbvh'
                        href = '/static/files/media/potrebiteliam/Договор о подключении - водоснабжение.docx'
                        label = 'Договор о подключении'
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiConnectionVodootvedView', flip: false, withTheme: true })(ConnectionVodootvedView);
/*
*/