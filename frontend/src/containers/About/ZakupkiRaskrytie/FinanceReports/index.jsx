import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import CardHeader from '../../../../components/Card/CardHeaderImpl.jsx';
import FileLink from '../../../../components/FileLink';
import CustomTabs from '../../../../components/CustomTabs/CustomTabs.jsx';
import GridItem from '../../../../components/Grid/GridItem.jsx';
import Table from '../../../../components/Table/Table.jsx';
// @material-ui/icons
import ContentCopy from '@material-ui/icons/FileCopy';
import Store from '@material-ui/icons/Store';
import InfoOutline from '@material-ui/icons/InfoOutlined';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';

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
                    <CustomTabs
                        title = "«Брюховецкое водопроводное хозяйство», ООО"
                        headerColor = "primary"
                        plainTabs = { true }
                        loading = { loading }
                        tabs = {[
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
                            },
                            {
                                tabName: '2021',
                                tabContent: (
                                    <p>No data</p>
                                )
                            }
                        ]}
                    />

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

                <Grid container>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomTabs
                            title = ""
                            headerColor = "primary"
                            loading = { loading }
                            tabs = {[
                                {
                                    tabName: '2019',
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <p>No data</p>
                                    )
                                },
                                {
                                    tabName: '2020',
                                    tabIcon: Code,
                                    tabContent: (
                                        <p>No data</p>
                                    )
                                },
                                {
                                    tabName: '2021',
                                    tabIcon: Cloud,
                                    tabContent: (
                                        <p>No data</p>
                                    )
                                }
                            ]}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="warning">
                                <h4>Employees Stats</h4>
                                <p>
                                Header
                                </p>
                            </CardHeader>
                                <p>
                                Body
                                </p>
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={['ID', 'Name', 'Salary', 'Country']}
                                    tableData={[
                                        ['1', 'Dakota Rice', '$36,738', 'Niger'],
                                        ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                                        ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                                        ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                                    ]}
                                />
                        </Card>
                    </GridItem>
                </Grid>

                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiZakupkiRaskrytieFinView', flip: false, withTheme: true })(ZakupkiRaskrytieFinView);
//export { ZakupkiRaskrytieView as ZakupkiRaskrytieViewNotConnected };
/*
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              loading={loading}
              tabs={[
                {
                  tabName: 'Bugs',
                  tabIcon: BugReport,
                  tabContent: bugs ? (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  ) : (
                    <p>No data</p>
                  )
                },
                {
                  tabName: 'Website',
                  tabIcon: Code,
                  tabContent: website ? (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  ) : (
                    <p>No data</p>
                  )
                },
                {
                  tabName: 'Server',
                  tabIcon: Cloud,
                  tabContent: server ? (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  ) : (
                    <p>No data</p>
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={['ID', 'Name', 'Salary', 'Country']}
                  tableData={[
                    ['1', 'Dakota Rice', '$36,738', 'Niger'],
                    ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                    ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                    ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
*/