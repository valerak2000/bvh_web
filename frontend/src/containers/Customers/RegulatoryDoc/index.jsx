import React, { Component } from 'react';
//import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
