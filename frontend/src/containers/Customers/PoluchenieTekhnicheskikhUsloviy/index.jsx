import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

class PoluchenieTekhnicheskikhUsloviyView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;
        const { ul, li } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Получение технических условий'
                    subheader = 'на замену или установку прибора учета'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
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
}

export default withStyles(null, { name: 'muiPoluchenieTekhnicheskikhUsloviyView', flip: false, withTheme: true })(PoluchenieTekhnicheskikhUsloviyView);
//export { PoluchenieTekhnicheskikhUsloviyView as PoluchenieTekhnicheskikhUsloviyViewNotConnected };
/*
                    <FileLink
                        key = 'zayavvvodpo'
                        href = '/static/files/media/potrebiteliam/Заявка на ввод в эксплуатацию прибора учета.docx'
                        label = 'Заявка на ввод в эксплуатацию прибора учета'
                    />
*/