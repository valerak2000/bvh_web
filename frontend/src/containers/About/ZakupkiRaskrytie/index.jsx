import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PdfLink from '../../../components/PdfLink/PdfLink';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

const rows = [
    {
        id: 1,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2017.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2017 год ООО «Брюховецкое водопроводное хозяйство»'
    },
    {
        id: 2,
        file: '/static/files/media/БВХ-УСН-2017.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год ООО «Брюховецкое водопроводное хозяйство»'
    },
];

class ZakupkiRaskrytieView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        const { сard } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Закупки и раскрытие информации'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Информация об условиях, на которых осуществляется поставка товаров (оказание услуг), включая сведения об публичных договоров поставок регулируемых товаров (оказание регулируемых услуг), а также сведения о договорах, заключенных по свободной цене, в соотвествии с частями 2.1 и 2.2 статьи 8 Федерального закона «О теплоснабжении»(на основании пункта 24 ПП РФ №570 от 05.07.2013г. (изм. внесены 31.08.2016г. ПП РФ №867).<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>Договора, заключенные обществом с ограниченой ответственностью&nbsp;«Брюховецкое водопроводное хозяйство» по свободным ценам, отсутствуют.</strong><br />
                    </Typography>
                    <br />
                    {
                        rows.map((r, index) => (
                            <PdfLink 
                                key = { r.id } 
                                href = { r.file } 
                                label = { r.title }
                            />
                        ))
                    }
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiZakupkiRaskrytieView', flip: false, withTheme: true })(ZakupkiRaskrytieView);
//export { ZakupkiRaskrytieView as ZakupkiRaskrytieViewNotConnected };
