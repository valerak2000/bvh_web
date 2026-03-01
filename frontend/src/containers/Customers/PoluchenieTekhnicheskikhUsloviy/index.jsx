import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

function PoluchenieTekhnicheskikhUsloviyView(props) {
    const theme = useTheme();
    const { card, ul, li } = theme;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Получение технических условий'
                subheader = 'на замену или установку прибора учета'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em',
                    }}
                >
                    <strong>Необходимый пакет документов (ксерокопии):</strong>
                </Typography>
                <ul style = { ul }>
                    <li style = { li }>
                        Паспорт гражданина Российской Федерации (страницы с фотографией и пропиской)
                    </li>
                    <li style = { li }>
                        Правоустанавливающие документы на домовладение
                    </li>
                    <li style = { li }>
                        Правоустанавливающие документы на земельный участок
                    </li>
                    <li style = { li }>
                        Акт контрольного съема (при повторной замене прибора учета)
                    </li>
                </ul>
                <br />
                Выдача технических условий через 10 рабочих дней

                <FileLink
                    key = 'zayavvtu'
                    href = '/static/files/media/potrebiteliam/Заявление на выдачу технических условий.docx'
                    label = 'Заявление на выдачу технических условий'
                />
            </CardContent>
        </Card>
    );
}

PoluchenieTekhnicheskikhUsloviyView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default PoluchenieTekhnicheskikhUsloviyView;
