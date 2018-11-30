import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '../../../components/Table/Table.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

const configActionColumns = [
    /*
        { Icon: Add, Tooltip: 'Add', Color: 'success', Callback: onAddClick },
        { Icon: Edit, Tooltip: 'Edit', Color: 'primary', Callback: onEditClick }
    */
];
    
class TarifsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Тарифы'
                    titleTypographyProps = { card.titleTypography }
                    style = { card.title }
                />
                <CardContent
                    style = { card.text }
                >
                    <Table
                        actionColumns = { configActionColumns }
                        tableHeaderColor = 'primary'
                        tableHead = {[
                            'Вид тарифа', 'Территория действия', 'Информация создана', 'Период действия',
                            'Регулируемая организация', 'Цена'
                        ]}
                        tableData = {[ 
                            ['Тариф на питьевую воду', '03610419 Свободненское, 03610416 Переясловское, 03610407 Брюховецкое', 'РЕГИОНАЛЬНАЯ ЭНЕРГЕТИЧЕСКАЯ КОМИССИЯ - ДЕПАРТАМЕНТ ЦЕН И ТАРИФОВ КРАСНОДАРСКОГО КРАЯ', '01.07.2018 — 31.12.2018', 'ООО «Брюховецкое водопроводное хозяйство»', 'Плата за 1 куб. метр холодной воды без НДС 22.57 р.'],
                            ['Тариф на водоотведение', '03610407 Брюховецкое', 'РЕГИОНАЛЬНАЯ ЭНЕРГЕТИЧЕСКАЯ КОМИССИЯ - ДЕПАРТАМЕНТ ЦЕН И ТАРИФОВ КРАСНОДАРСКОГО КРАЯ', '01.07.2018 — 31.12.2018', 'ООО «Брюховецкое предприятие отвода и очистки стоков»', 'Плата за 1 куб. метр принятых сточных вод без НДС 44.09 р.'],
                         ]}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiTarifsView', flip: false, withTheme: true })(TarifsView);
//export { TarifsView as TarifsViewNotConnected };
/*
                    <a href = "https://dom.gosuslugi.ru/#!/public-tariff/payment/8844a848-3108-441e-a6e4-bad0d7a50967" target = "_blank">тариф на питьевую воду</a>
                    <a href = "https://dom.gosuslugi.ru/#!/public-tariff/payment/4f3d6bc5-659f-440c-a16b-7f9c85c0369c" target = "_blank">тариф на водоотведение</a>
                    
*/