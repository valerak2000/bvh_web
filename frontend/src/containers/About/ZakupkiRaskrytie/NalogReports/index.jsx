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
 /*   {
        id: 1,
        file: '/static/files/media/БВХ-УСН-2017.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год'
    },
    {
        id: 2,
        file: '/static/files/media/БВХ-УСН-2018.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2018 год'
    },
    {
        id: 3,
        file: '/static/files/media/БВХ-УСН-2019.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2019 год'
    },
    {
        id: 4,
        file: '/static/files/media/БВХ-УСН-2020.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2020 год'
    },
    {
        id: 5,
        file: '/static/files/media/БВХ-УСН-2021.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2021 год'
    },*/
    {
        id: 6,
        file: '/static/files/media/БВХ-УСН-2022.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2022 год'
    },
    {
        id: 7,
        file: '/static/files/media/БВХ-УСН-2023.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2023 год'
    },
    {
        id: 8,
        file: '/static/files/media/БВХ-УСН-2024.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2024 год'
    },
];

const rowsBoos = [
 /*   {
        id: 1,
        file: '/static/files/media/БООС-УСН-2017.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год'
    },
    {
        id: 2,
        file: '/static/files/media/БООС-УСН-2018.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2018 год'
    },
    {
        id: 3,
        file: '/static/files/media/БООС-УСН-2019.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2019 год'
    },
    {
        id: 4,
        file: '/static/files/media/БООС-УСН-2020.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2020 год'
    },
    {
        id: 5,
        file: '/static/files/media/БООС-УСН-2021.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2021 год'
    },*/
    {
        id: 6,
        file: '/static/files/media/БООС-УСН-2022.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2022 год'
    },
    {
        id: 7,
        file: '/static/files/media/БООС-УСН-2023.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2023 год'
    },
    {
        id: 8,
        file: '/static/files/media/БООС-УСН-2024.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2024 год'
    },
];

function ZakupkiRaskrytieNalView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Налоговая отчетность'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <CardHeader
                    subheader = '«Брюховецкое водопроводное хозяйство», ООО'
                    { ...props }
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
                    { ...props }
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

ZakupkiRaskrytieNalView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default ZakupkiRaskrytieNalView;
