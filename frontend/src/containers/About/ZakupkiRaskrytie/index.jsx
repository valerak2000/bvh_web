import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import PdfLink from '../../../components/PdfLink';

const bvh_if2_2017 = '/static/files/media/Баланс-и-ф-2-БВХ-2017.pdf';
const bvh_usn_2017 = '/static/files/media/БВХ-УСН-2017.pdf';

class ZakupkiRaskrytieView extends Component {
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
                    title = 'Закупки и раскрытие информации'
                    titleStyle = { this.props.muiTheme.app.сard.title }
                />
                <CardText>
                    <p>Информация об условиях, на которых осуществляется поставка товаров (оказание услуг), включая сведения об публичных договоров поставок регулируемых товаров (оказание регулируемых услуг), а также сведения о договорах, заключенных по свободной цене, в соотвествии с частями 2.1 и 2.2 статьи 8 Федерального закона «О теплоснабжении»(на основании пункта 24 ПП РФ №570 от 05.07.2013г. (изм. внесены 31.08.2016г. ПП РФ №867).<br />
                    <b>Договора, заключенные обществом с ограниченой ответственностью&nbsp;«Брюховецкое водопроводное хозяйство» по свободным ценам, отсутствуют.</b></p>
                    <PdfLink 
                        href = { bvh_if2_2017 } 
                        label = "Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2017 год ООО «Брюховецкое водопроводное хозяйство»"
                    />
                    <br />
                    <PdfLink 
                        href = { bvh_usn_2017 } 
                        label = "Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год ООО «Брюховецкое водопроводное хозяйство»"
                    />
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default withTheme()(connect(mapStateToProps)(ZakupkiRaskrytieView));
export { ZakupkiRaskrytieView as ZakupkiRaskrytieViewNotConnected };
