import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

function UrlicaZaklyuchenieDogovorovHolvodView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Заключение договоров на холодное водоснабжение'
                subheader = 'ООО «Брюховецкое водопроводное хозяйство»'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <FileLink
                    key = 'dogovorpodklbvh'
                    href = '/static/files/media/potrebiteliam/Договор водоснабжения с юрлицами.docx'
                    label = 'Договор холодного водоснабжения с юридическими лицами'
                />
            </CardContent>
        </Card>
    );
}

UrlicaZaklyuchenieDogovorovHolvodView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default UrlicaZaklyuchenieDogovorovHolvodView;
