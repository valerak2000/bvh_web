import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

function UrlicaZaklyuchenieDogovorovVodootvedView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Заключение договоров на водоотведение'
                subheader = 'ООО «Брюховецкое предприятие отвода и очистки стоков»'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <FileLink
                    key = 'dogovorpodklbvh'
                    href = '/static/files/media/potrebiteliam/Договор водоотведения с юллицами.docx'
                    label = 'Договор на водоотведение с юридическими лицами'
                />
            </CardContent>
        </Card>
    );
}

UrlicaZaklyuchenieDogovorovVodootvedView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default UrlicaZaklyuchenieDogovorovVodootvedView;
