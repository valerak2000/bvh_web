import React, { Component } from 'react';
//import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import PdfLink from '../../../components/PdfLink';
//import rekvisity_ooo_bvh from '../../../../../backend/files/media/rekvisity_ooo_bvh.pdf';
import federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii from '../../../../../backend/files/media/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.pdf';
import pp_83 from '../../../../../backend/files/media/potrebiteliam/pp_83.pdf';
import pp_124 from '../../../../../backend/files/media/potrebiteliam/pp_124.pdf';
import pp_354 from '../../../../../backend/files/media/potrebiteliam/pp_354.pdf';
//import postanovlenie_no644_v_redakcii_ot_26_12_2016 from '../../../../../backend/files/media/potrebiteliam/postanovlenie_no644_v_redakcii_ot_26.12.2016.pdf';
import pp_645 from '../../../../../backend/files/media/potrebiteliam/pp_645.pdf';
import pp_776 from '../../../../../backend/files/media/potrebiteliam/pp_776.pdf';
import poryadok_vzaimodeystviya_1027_47 from '../../../../../backend/files/media/potrebiteliam/poryadok_vzaimodeystviya_1027-47.pdf';
import sanitarnye_pravila from '../../../../../backend/files/media/potrebiteliam/sanitarnye_pravila.pdf';
import sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy from '../../../../../backend/files/media/potrebiteliam/sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy.pdf';
import administrativnyy_reglament from '../../../../../backend/files/media/potrebiteliam/8_administrativnyy_reglament.pdf';

class RegulatoryDocView extends Component {
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
                    title = 'Нормативные документы'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText 
                    expandable = { false }
                    style = { this.props.muiTheme.app.сard.text }
                >
                    <h4>Постановления правительства РФ и федеральные законы:</h4>
                    <ul>
                        <ol>
                            <li>
                                <PdfLink 
                                    href = { federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii } 
                                    label = "Федеральный закон № 416"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { pp_83 } 
                                    label = "Постановление правительства № 83"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { pp_124 } 
                                    label = "Постановление правительства № 124"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { pp_354 } 
                                    label = "Постановление правительства № 354"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { pp_645 } 
                                    label = "Постановление правительства № 645"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { pp_776 } 
                                    label = "Постановление правительства № 776"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { poryadok_vzaimodeystviya_1027_47 } 
                                    label = "Постановление правительства № 1027/47"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { sanitarnye_pravila } 
                                    label = "Постановление Минздрава РФ № 24"
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy } 
                                    label = "Свод правил. Внутренний водопровод и канализация зданий."
                                />
                            </li>
                            <li>
                                <PdfLink 
                                    href = { administrativnyy_reglament } 
                                    label = "Административный Регламент по выдаче:"
                                />
                                <ul>
                                    <li>Технических условий</li>
                                    <li>Справок о выполнении технических условий</li>
                                    <li>Предоставления холодного водоснабжения и водоотведения физическим и юридическим лицам</li>
                                </ul>
                            </li>
                        </ol>
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

export default muiThemeable()(connect(mapStateToProps)(RegulatoryDocView));
export { RegulatoryDocView as RegulatoryDocViewNotConnected };
/*

<a href = { rekvisity_ooo_bvh } >Реквизиты ООО «Брюховецкое водопроводное хозяйство»</a>
*/