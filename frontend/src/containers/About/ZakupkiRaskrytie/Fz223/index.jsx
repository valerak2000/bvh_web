import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CardHeader from '../../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../../components/FileLink';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

const rowsBvh = [
    {
        id: 1,
        file: '/static/files/media/Положение о закупках БВХ 2020.pdf',
        title: 'Положение о закупках'
    },
 /*   {
        id: 2,
        file: '/static/files/media/План  закупок  2019  БВХ.xls',
        title: 'Планы закупок 2019'
    },
    {
        id: 3,
        file: '/static/files/media/План  закупок  2020  БВХ.xls',
        title: 'Планы закупок 2020'
    },
    {
        id: 4,
        file: '/static/files/media/План  закупок  2021  БВХ.xls',
        title: 'Планы закупок 2021'
    },*/
    {
        id: 5,
        file: '/static/files/media/План  закупок  2022  БВХ.xls',
        title: 'Планы закупок 2022'
    },
    {
        id: 6,
        file: '/static/files/media/План  закупок  2023  БВХ.xls',
        title: 'Планы закупок 2023'
    },
    {
        id: 7,
        file: '/static/files/media/План  закупок  2024  БВХ.xls',
        title: 'Планы закупок 2024'
    },
    {
        id: 8,
        file: '/static/files/media/План  закупок  2025  БВХ.xls',
        title: 'Планы закупок 2025'
    },
/*    {
        id: 9,
        file: '/static/files/media/Отчетность по договорам БВХ 2019.7z',
        title: 'Отчетность по договорам 2019'
    },
    {
        id: 10,
        file: '/static/files/media/Отчетность по договорам БВХ 2020.7z',
        title: 'Отчетность по договорам 2020'
    },
    {
        id: 12,
        file: '/static/files/media/Отчетность по договорам БВХ 2021.7z',
        title: 'Отчетность по договорам 2021'
    },*/
    {
        id: 13,
        file: '/static/files/media/Отчетность по договорам БВХ 2022.7z',
        title: 'Отчетность по договорам 2022'
    },
 /*   {
        id: 14,
        file: '/static/files/media/СМ БВХ 2019.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2019'
    },
    {
        id: 15,
        file: '/static/files/media/СМ БВХ 2020.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2020'
    },
    {
        id: 16,
        file: '/static/files/media/СМ БВХ 2021.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2021'
    },*/
    {
        id: 17,
        file: '/static/files/media/СМ БВХ 2022.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2022'
    },
/*    {
        id: 18,
        file: '/static/files/media/ИП БВХ 2019.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2019'
    },
    {
        id: 19,
        file: '/static/files/media/ИП БВХ 2020.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2020'
    },
    {
        id: 20,
        file: '/static/files/media/ИП БВХ 2021.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2021'
    },*/
    {
        id: 21,
        file: '/static/files/media/ИП БВХ 2022.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2022'
    },
    {
        id: 22,
        file: '/static/files/media/ИП БВХ 2023.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2023'
    },
    {
        id: 23,
        file: '/static/files/media/ИП БВХ 2024.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2024'
    },
];

const rowsBoos = [
    {
        id: 1,
        file: '/static/files/media/Положение о закупках БООС 2020.pdf',
        title: 'Положение о закупках'
    },
 /*   {
        id: 2,
        file: '/static/files/media/План  закупок  2019  БООС.xls',
        title: 'Планы закупок 2019'
    },
    {
        id: 3,
        file: '/static/files/media/План  закупок  2020  БООС.xls',
        title: 'Планы закупок 2020'
    },
    {
        id: 4,
        file: '/static/files/media/План  закупок  2021  БООС.xls',
        title: 'Планы закупок 2021'
    },
    {
        id: 5,
        file: '/static/files/media/План  закупок с изменениями  2021  БООС.xls',
        title: 'План закупок с изменениями 2021'
    },*/
    {
        id: 6,
        file: '/static/files/media/План  закупок  2022  БООС.xls',
        title: 'Планы закупок 2022'
    },
    {
        id: 7,
        file: '/static/files/media/План  закупок  2023  БООС.xls',
        title: 'Планы закупок 2023'
    },
    {
        id: 8,
        file: '/static/files/media/План  закупок  2024  БООС.xls',
        title: 'Планы закупок 2024'
    },
    {
        id: 9,
        file: '/static/files/media/План  закупок  2025  БООС.xls',
        title: 'Планы закупок 2025'
    },
/*    {
        id: 10,
        file: '/static/files/media/Отчетность по договорам БООС 2019.7z',
        title: 'Отчетность по договорам 2019'
    },
    {
        id: 11,
        file: '/static/files/media/Отчетность по договорам БООС 2020.7z',
        title: 'Отчетность по договорам 2020'
    },
    {
        id: 12,
        file: '/static/files/media/Отчетность по договорам БООС 2021.7z',
        title: 'Отчетность по договорам 2021'
    },*/
    {
        id: 13,
        file: '/static/files/media/Отчетность по договорам БООС 2022.7z',
        title: 'Отчетность по договорам 2022'
    },
    {
        id: 14,
        file: '/static/files/media/Отчетность по договорам БООС 2023.7z',
        title: 'Отчетность по договорам 2023'
    },
/*    {
        id: 15,
        file: '/static/files/media/СМ БООС 2019.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2019'
    },
    {
        id: 16,
        file: '/static/files/media/СМ БООС 2020.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2020'
    },
    {
        id: 17,
        file: '/static/files/media/СМ БООС 2021.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2021'
    },*/
    {
        id: 18,
        file: '/static/files/media/СМ БООС 2022.xls',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства 2022'
    },
/*   {
        id: 19,
        file: '/static/files/media/ИП БООС 2019.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2019'
    },
    {
        id: 20,
        file: '/static/files/media/ИП БООС 2020.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2020'
    },
    {
        id: 21,
        file: '/static/files/media/ИП БООС 2021.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2021'
    },*/
    {
        id: 22,
        file: '/static/files/media/ИП БООС 2022.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2022'
    },
    {
        id: 23,
        file: '/static/files/media/ИП БООС 2023.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2023'
    },
    {
        id: 24,
        file: '/static/files/media/ИП БООС 2024.doc',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции 2024'
    },
];

class ZakupkiRaskrytieFz223View extends Component {
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
                    title = '223-ФЗ'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <CardHeader
                        subheader = '«Брюховецкое водопроводное хозяйство», ООО'
                        { ...this.props }
                    />
                    {
                        rowsBvh.map((r, index) => (
                            <FileLink
                                key = { r.id } 
                                href = { r.file } 
                                label = { r.title }
                            />
                        ))
                    }

                    <br/>
                    <Divider />

                    <CardHeader
                        subheader = '«Брюховецкое предприятие отвода и очистки стоков», ООО'
                        { ...this.props }
                    />
                    {
                        rowsBoos.map((r, index) => (
                            <FileLink
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

export default withStyles(styles, { name: 'muiZakupkiRaskrytieFz223View', flip: false, withTheme: true })(ZakupkiRaskrytieFz223View);
//export { ZakupkiRaskrytieFz223View as ZakupkiRaskrytieFz223ViewNotConnected };
