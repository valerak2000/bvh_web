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
    {
        id: 2,
        file: '/static/files/media/blank.pdf',
        title: 'Планы закупок'
    },
    {
        id: 3,
        file: '/static/files/media/blank.pdf',
        title: 'Отчетность по договорам'
    },
    {
        id: 4,
        file: '/static/files/media/blank.pdf',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства'
    },
    {
        id: 5,
        file: '/static/files/media/blank.pdf',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции'
    },
];

const rowsBoos = [
    {
        id: 1,
        file: '/static/files/media/Положение о закупках БООС 2020.pdf',
        title: 'Положение о закупках'
    },
    {
        id: 2,
        file: '/static/files/media/blank.pdf',
        title: 'Планы закупок'
    },
    {
        id: 3,
        file: '/static/files/media/blank.pdf',
        title: 'Отчетность по договорам'
    },
    {
        id: 4,
        file: '/static/files/media/blank.pdf',
        title: 'Годовые отчеты о закупке товаров,работ,услуг у субъектов малого и среднего предпринимательства'
    },
    {
        id: 5,
        file: '/static/files/media/blank.pdf',
        title: 'Годовые отчеты о закупке инновационной продукции,высокотехнологичной продукции'
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
