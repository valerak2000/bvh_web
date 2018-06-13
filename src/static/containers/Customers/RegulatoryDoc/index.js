import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import PdfLink from '../../../components/PdfLink';
import rekvisity_ooo_bvh from '../../../../files/media/rekvisity_ooo_bvh.pdf';
import federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii from '../../../../files/media/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.pdf'
import pp_83 from '../../../../files/media/potrebiteliam/pp_83.pdf'
import pp_124 from '../../../../files/media/potrebiteliam/pp_124.pdf'
import pp_354 from '../../../../files/media/potrebiteliam/pp_354.pdf'
import postanovlenie_no644_v_redakcii_ot_26_12_2016 from '../../../../files/media/potrebiteliam/postanovlenie_no644_v_redakcii_ot_26.12.2016.pdf'
import pp_645 from '../../../../files/media/potrebiteliam/pp_645.pdf'
import pp_776 from '../../../../files/media/potrebiteliam/pp_776.pdf'

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
                            <li><a href="/sites/default/files/docs/potrebiteliam/poryadok_vzaimodeystviya_1027-47.pdf"><span style="font-size:16px">Постановление правительства № 1027/47</span></a></li>
                            <li><a href="/sites/default/files/docs/potrebiteliam/sanitarnye_pravila.docx"><span style="font-size:16px">Постановление Минздрава РФ № 24</span></a></li>
                            <li><a href="/sites/default/files/docs/potrebiteliam/sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy.docx"><span style="font-size:16px">Свод правил. Внутренний водопровод и канализация зданий.</span></a></li>
                            <li>
                                <p><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/PTO/8_administrativnyy_reglament.doc">Административный Регламент</a> по выдаче:</span></p>
                            </li>

                    <ul>
                        <li><span style="font-size:16px">Технических условий</span></li>
                        <li><span style="font-size:16px">Справок о выполнении технических условий</span></li>
                    </ul>
                    <p><span style="font-size:16px">А так же предоставлении: </span></p>
                    <ul>
                        <li><span style="font-size:16px">Холодного водоснабжения и водоотведения физическим и юридическим лицам</span></li>
                    </ul>

                    <a href="/sites/default/files/docs/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.docx">Федеральный закон № 416</a></span>

<a href = { rekvisity_ooo_bvh } >Реквизиты ООО «Брюховецкое водопроводное хозяйство»</a>
*/