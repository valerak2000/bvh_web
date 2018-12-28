import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

const federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii = '/static/files/media/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.pdf';
const pp_83 = '/static/files/media/potrebiteliam/pp_83.pdf';
const pp_124 = '/static/files/media/potrebiteliam/pp_124.pdf';
const pp_354 = '/static/files/media/potrebiteliam/pp_354.pdf';
const pp_644 = '/static/files/media/potrebiteliam/pp_644.pdf';
const pp_645 = '/static/files/media/potrebiteliam/pp_645.pdf';
const pp_776 = '/static/files/media/potrebiteliam/pp_776.pdf';
const sanitarnye_pravila = '/static/files/media/potrebiteliam/sanitarnye_pravila.pdf';
const sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy = '/static/files/media/potrebiteliam/sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy.pdf';
 
const styles = theme => ({
});

class RegulatoryDocView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Нормативные документы'
                    { ...this.props }
                />
                <CardContent 
                    style = { card.text }
                >
                    <Typography 
                        variant = 'h4'
                        color = 'textSecondary'
                    >
                        Постановления правительства РФ и федеральные законы
                    </Typography>
                    <FileLink 
                        href = { federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii }
                        label = 'ФЗ №416 от 7 декабря 2011г. "О Водоснабжении и водоотведении"'
                    />
                    <FileLink 
                        href = { pp_83 } 
                        label = 'ПП №83 от 13 февраля 2006г. "Об утверждении правил определения и предоставления технических условий подключения объекта капитального строительства к сетям инженерно-технического обеспечения и правил подключения объекта капитального строительства к сетям инженерно-технического обеспечения."'
                    />
                    <FileLink 
                        href = { pp_124 } 
                        label = 'ПП № 124 от 14 февраля 2012г. "О правилах, обязательных при заключение договоров снабжения коммунальными ресурсами."'
                    />
                    <FileLink 
                        href = { pp_354 } 
                        label = 'ПП № 354 от 6 мая 2011г. "О предоставлении коммунальных услуг собственникам и пользователям помещений в многоквартирных домах и жилых домов."'
                    />
                    <FileLink 
                        href = { pp_644 } 
                        label = 'ПП № 644 от 29 июля 2013г. "Об утверждении правил холодного водоснабжения и водоотведения и о внесении изменений в некоторые акты Правительства Российской Федерации."'
                    />
                    <FileLink 
                        href = { pp_645 } 
                        label = 'ПП № 645 от 29 июля 2013г. "Об утверждениии типовых договоров в области холодного водоснабжения и водоотведения."'
                    />
                    <FileLink 
                        href = { pp_776 } 
                        label = 'ПП № 776 от 4 сентября 2013г. "Об утверждении правил организации коммерческого учета воды, сточных вод."'
                    />
                    <FileLink 
                        href = { sanitarnye_pravila } 
                        label = 'Постановление Министерства здравоохранения РФ № 24 от 26 сентября 2001г. "О введении в действие санитарных правил."'
                    />
                    <FileLink 
                        href = { sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy } 
                        label = 'Свод правил. Внутренний водопровод и канализация зданий. СНИП 2.04.01-85'
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiRegulatoryDocView', flip: false, withTheme: true })(RegulatoryDocView);
//export { RegulatoryDocView as RegulatoryDocViewNotConnected };

/*
*/

