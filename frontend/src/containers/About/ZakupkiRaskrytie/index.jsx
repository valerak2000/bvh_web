import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import PdfLink from '../../../components/PdfLink';

const bvh_if2_2017 = '/static/files/media/Баланс-и-ф-2-БВХ-2017.pdf';
const bvh_usn_2017 = '/static/files/media/БВХ-УСН-2017.pdf';

class ZakupkiRaskrytieView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { сard } = this.props.theme.app;

        return (
            <Card
                style = { сard }
            >
                <CardHeader
                    title = 'Закупки и раскрытие информации'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    <p>Информация об условиях, на которых осуществляется поставка товаров (оказание услуг), включая сведения об публичных договоров поставок регулируемых товаров (оказание регулируемых услуг), а также сведения о договорах, заключенных по свободной цене, в соотвествии с частями 2.1 и 2.2 статьи 8 Федерального закона «О теплоснабжении»(на основании пункта 24 ПП РФ №570 от 05.07.2013г. (изм. внесены 31.08.2016г. ПП РФ №867).<br />
                    <b>Договора, заключенные обществом с ограниченой ответственностью&nbsp;«Брюховецкое водопроводное хозяйство» по свободным ценам, отсутствуют.</b></p>
                    <PdfLink 
                        href = { bvh_if2_2017 } 
                        label = "Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2017 год ООО «Брюховецкое водопроводное хозяйство»"
                    />
                    <PdfLink 
                        href = { bvh_usn_2017 } 
                        label = "Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год ООО «Брюховецкое водопроводное хозяйство»"
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withTheme()(ZakupkiRaskrytieView);
export { ZakupkiRaskrytieView as ZakupkiRaskrytieViewNotConnected };
