import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import rekvisity_ooo_bvh from '../../../../files/media/rekvisity_ooo_bvh.pdf';
import federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii from '../../../../files/media/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.docx'

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
                <CardText>
                    <h2>Постановления правительства РФ и федеральные законы:</h2>
                    <a 
                        href = { rekvisity_ooo_bvh } 
                        style = { this.props.muiTheme.pdf }
                    >Реквизиты ООО «Брюховецкое водопроводное хозяйство»
                    </a>
                    <ul>
                        <ol>
                            <li>
                                <PdfLink 
                                    href = { federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii } 
                                    label = "Федеральный закон № 416"
                                />
                            </li>
                            <li><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/pp_83.doc">Постановление правительства № 83</a></span></li>
                            <li><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/124.docx">Постановление правительства № 124</a></span></li>
                            <li><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/354.docx">Постановление правительства № 354</a></span></li>
                            <li><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/postanovlenie_no644_v_redakcii_ot_26.12.2016.docx">Постановление правительства № 644</a></span></li>
                            <li><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/645.docx">Постановление правительства № 645</a></span></li>
                            <li><a href="/sites/default/files/docs/potrebiteliam/776.docx"><span style="font-size:16px">Постановление правительства № 776</span></a></li>
                            <li><a href="/sites/default/files/docs/potrebiteliam/poryadok_vzaimodeystviya_1027-47.pdf"><span style="font-size:16px">Постановление правительства № 1027/47</span></a></li>
                            <li><a href="/sites/default/files/docs/potrebiteliam/sanitarnye_pravila.docx"><span style="font-size:16px">Постановление Минздрава РФ № 24</span></a></li>
                            <li><a href="/sites/default/files/docs/potrebiteliam/sp_vnutrenniy_vodoprovod_i_kanalizaciya_zdaniy.docx"><span style="font-size:16px">Свод правил. Внутренний водопровод и канализация зданий.</span></a></li>
                            <li>
                                <p><span style="font-size:16px"><a href="/sites/default/files/docs/potrebiteliam/PTO/8_administrativnyy_reglament.doc">Административный Регламент</a> по выдаче:</span></p>
                            </li>
                        </ol>
                    </ul>
                    <ul>
                        <li><span style="font-size:16px">Технических условий</span></li>
                        <li><span style="font-size:16px">Справок о выполнении технических условий</span></li>
                    </ul>
                    <p><span style="font-size:16px">А так же предоставлении: </span></p>
                    <ul>
                        <li><span style="font-size:16px">Холодного водоснабжения и водоотведения физическим и юридическим лицам</span></li>
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
<a href="/sites/default/files/docs/potrebiteliam/federalnyy_zakon_o_vodosnabzhenii_i_vodootvedenii.docx">Федеральный закон № 416</a></span>

<a href = { rekvisity_ooo_bvh } >Реквизиты ООО «Брюховецкое водопроводное хозяйство»</a>
*/