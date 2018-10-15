import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import PdfLink from '../../../components/PdfLink';

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
const administrativnyy_reglament = '/static/files/media/potrebiteliam/8_administrativnyy_reglament.pdf';
 
class RegulatoryDocView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { сard } = this.props.theme.app;
        const { li } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Нормативные документы'
                    titleTypographyProps = { сard.title }
                />
                <CardContent 
                    style = { сard.text }
                >
                    <h4>Постановления правительства РФ и федеральные законы:</h4>
                    <PdfLink 
                        href = { federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii }
                        label = "Федеральный закон № 416"
                    />
                    <PdfLink 
                        href = { pp_83 } 
                        label = "Постановление правительства № 83"
                    />
                    <PdfLink 
                        href = { pp_124 } 
                        label = "Постановление правительства № 124"
                    />
                    <PdfLink 
                        href = { pp_354 } 
                        label = "Постановление правительства № 354"
                    />
                    <PdfLink 
                        href = { pp_645 } 
                        label = "Постановление правительства № 645"
                    />
                    <PdfLink 
                        href = { pp_776 } 
                        label = "Постановление правительства № 776"
                    />
                    <PdfLink 
                        href = { poryadok_vzaimodeystviya_1027_47 } 
                        label = "Постановление правительства № 1027/47"
                    />
                    <PdfLink 
                        href = { sanitarnye_pravila } 
                        label = "Постановление Минздрава РФ № 24"
                    />
                    <PdfLink 
                        href = { sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy } 
                        label = "Свод правил. Внутренний водопровод и канализация зданий."
                    />
                    <PdfLink 
                        href = { administrativnyy_reglament } 
                        label = "Административный Регламент по выдаче:"
                    />
                    <ul>
                        <li style = { li }>Технических условий</li>
                        <li style = { li }>Справок о выполнении технических условий</li>
                        <li style = { li }>Предоставления холодного водоснабжения и водоотведения физическим и юридическим лицам</li>
                    </ul>
            </CardContent>
            </Card>
        );
    }
}
/*

*/

export default withTheme()(RegulatoryDocView);
export { RegulatoryDocView as RegulatoryDocViewNotConnected };
