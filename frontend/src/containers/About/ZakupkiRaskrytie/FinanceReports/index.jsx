import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import CardHeader from '../../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../../components/FileLink';

const rowsBvh = [
    /*   {
        id: 1,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2017.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2017 год'
    },
    {
        id: 2,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2018.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2018 год'
    },
    {
        id: 3,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2019.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2019 год'
    },
    {
        id: 4,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2020.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2020 год'
    },
    {
        id: 5,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2021.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2021 год'
    },*/
    {
        id: 6,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2022.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2022 год'
    },
    {
        id: 7,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2023.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2023 год'
    },
    {
        id: 8,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2024.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2024 год'
    }
];

function ZakupkiRaskrytieFinView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card square={true} sx={card}>
            <CardHeader title="Финансовая отчетность" {...props} />
            <CardContent sx={card.text}>
                <CardHeader subheader="«Брюховецкое водопроводное хозяйство», ООО" {...props} />

                {rowsBvh.map((r, index) => (
                    <FileLink key={r.id} href={r.file} label={r.title} />
                ))}
            </CardContent>
        </Card>
    );
}

ZakupkiRaskrytieFinView.propTypes = {
    theme: PropTypes.object.isRequired
};

export default ZakupkiRaskrytieFinView;
