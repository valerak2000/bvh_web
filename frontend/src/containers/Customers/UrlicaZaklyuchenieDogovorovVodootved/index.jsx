import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../components/FileLink';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
});

class UrlicaZaklyuchenieDogovorovVodootvedView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Заключение договоров на водоотведение'
                    subheader = 'ООО «Брюховецкое предприятие отвода и очистки стоков»'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <FileLink
                        key = 'dogovorpodklbvh'
                        href = '/static/files/media/potrebiteliam/Договор водоотведения с юллицами.pdf'
                        label = 'Договор на водоотведение с юридическими лицами'
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiUrlicaZaklyuchenieDogovorovVodootvedView', flip: false, withTheme: true })(UrlicaZaklyuchenieDogovorovVodootvedView);
