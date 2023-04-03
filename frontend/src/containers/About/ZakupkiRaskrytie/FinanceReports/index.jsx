import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
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
    },
    {
        id: 6,
        file: '/static/files/media/Баланс-и-ф-2-БВХ-2022.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2022 год'
    },
];

const rowsBoos = [
    {
        id: 1,
        file: '/static/files/media/Баланс-и-ф-2-БООС-2017.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2017 год'
    },
    {
        id: 2,
        file: '/static/files/media/Баланс-и-ф-2-БООС-2018.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2018 год'
    },
    {
        id: 3,
        file: '/static/files/media/Баланс-и-ф-2-БООС-2019.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2019 год'
    },
    {
        id: 4,
        file: '/static/files/media/Баланс-и-ф-2-БООС-2020.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2020 год'
    },
    {
        id: 5,
        file: '/static/files/media/Баланс-и-ф-2-БООС-2021.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2021 год'
    },
    {
        id: 6,
        file: '/static/files/media/Баланс-и-ф-2-БООС-2022.pdf',
        title: 'Годовой бухгалтерский баланс и форма №2 «Отчет о прибылях и убытках» за 2022 год'
    },
];

class ZakupkiRaskrytieFinView extends Component {
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
        const { loading } = true;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Финансовая отчетность'
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

export default withStyles(styles, { name: 'muiZakupkiRaskrytieFinView', flip: false, withTheme: true })(ZakupkiRaskrytieFinView);
//export { ZakupkiRaskrytieView as ZakupkiRaskrytieViewNotConnected };
/*
import CustomTabs from '../../../../components/CustomTabs/CustomTabs.jsx';
import GridItem from '../../../../components/Grid/GridItem.jsx';
import Table from '../../../../components/Table/Table.jsx';

                    <CustomTabs
                        title = ''
                        headerColor = 'primary'
                        plainTabs = { true }
                        loading = { loading }
                        tabs = {[
                            {
                                tabName: '2017',
                                tabContent: (
                                    rowsBvh.filter(year => year.includes('2017')).map((r, index) => (
                                        <FileLink
                                            key = { r.id } 
                                            href = { r.file } 
                                            label = { r.title }
                                        />
                                    ))
                                )
                            },
                            {
                                tabName: '2018',
                                tabContent: (
                                    <p>No data</p>
                                )
                            },
                            {
                                tabName: '2019',
                                tabContent: (
                                    <p>No data</p>
                                )
                            },
                            {
                                tabName: '2020',
                                tabContent: (
                                    <p>No data</p>
                                )
                            }
                        ]}
                    />
*/