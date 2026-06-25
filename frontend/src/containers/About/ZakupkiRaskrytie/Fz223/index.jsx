import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import CardHeader from '../../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../../components/FileLink';

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
    }
];

function ZakupkiRaskrytieFz223View(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card square={true} sx={card}>
            <CardHeader title="223-ФЗ" {...props} />
            <CardContent sx={card.text}>
                <CardHeader subheader="«Брюховецкое водопроводное хозяйство», ООО" {...props} />
                {rowsBvh.map((r, index) => (
                    <FileLink key={r.id} href={r.file} label={r.title} />
                ))}
            </CardContent>
        </Card>
    );
}

ZakupkiRaskrytieFz223View.propTypes = {
    theme: PropTypes.object.isRequired
};

export default ZakupkiRaskrytieFz223View;
