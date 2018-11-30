import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import PdfLink from '../../../components/PdfLink/PdfLink';

const federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii = '/static/files/media/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.pdf';
const pp_83 = '/static/files/media/potrebiteliam/pp_83.pdf';
const pp_124 = '/static/files/media/potrebiteliam/pp_124.pdf';
const pp_354 = '/static/files/media/potrebiteliam/pp_354.pdf';
const postanovlenie_no644_v_redakcii_ot_26_12_2016 = '/static/files/media/potrebiteliam/postanovlenie_no644_v_redakcii_ot_26.12.2016.pdf';
const pp_645 = '/static/files/media/potrebiteliam/pp_645.pdf';
const pp_776 = '/static/files/media/potrebiteliam/pp_776.pdf';
const poryadok_vzaimodeystviya_1027_47 = '/static/files/media/potrebiteliam/poryadok_vzaimodeystviya_1027-47.pdf';
const sanitarnye_pravila = '/static/files/media/potrebiteliam/sanitarnye_pravila.pdf';
const sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy = '/static/files/media/potrebiteliam/sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy.pdf';
 
const styles = theme => ({
});

class RegulatoryDocView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
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
                    titleTypographyProps = { card.title }
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
                    <PdfLink 
                        href = { federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii }
                        label = 'Федеральный закон № 416'
                    />
                    <PdfLink 
                        href = { pp_83 } 
                        label = 'Постановление правительства № 83'
                    />
                    <PdfLink 
                        href = { pp_124 } 
                        label = 'Постановление правительства № 124'
                    />
                    <PdfLink 
                        href = { pp_354 } 
                        label = 'Постановление правительства № 354'
                    />
                    <PdfLink 
                        href = { pp_645 } 
                        label = 'Постановление правительства № 645'
                    />
                    <PdfLink 
                        href = { pp_776 } 
                        label = 'Постановление правительства № 776'
                    />
                    <PdfLink 
                        href = { poryadok_vzaimodeystviya_1027_47 } 
                        label = 'Постановление правительства № 1027/47'
                    />
                    <PdfLink 
                        href = { sanitarnye_pravila } 
                        label = 'Постановление Минздрава РФ № 24'
                    />
                    <PdfLink 
                        href = { sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy } 
                        label = 'Свод правил. Внутренний водопровод и канализация зданий.'
                    />
                </CardContent>
            </Card>
        );
    }
}
/*

*/

export default withStyles(styles, { name: 'muiRegulatoryDocView', flip: false, withTheme: true })(RegulatoryDocView);
//export { RegulatoryDocView as RegulatoryDocViewNotConnected };
