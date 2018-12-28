import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Table from '../../../components/Table/Table.jsx';
import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 2rem',
    },
});

const dateVacancy = new Date();

const vacancys = [
    //['1', 'экскаваторщик', 'знать мат часть']
];

const configActionColumns = [
/*
    { Icon: Add, Tooltip: 'Add', Color: 'success', Callback: onAddClick },
    { Icon: Edit, Tooltip: 'Edit', Color: 'primary', Callback: onEditClick }
*/
];

class VacanciesView extends Component {
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
        const formatedDateVacancy = moment().format('LL');

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Вакансии'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    {
                        vacancys.length > 0 ? (
                            <React.Fragment key = 'vacancy_table'>
                                <Typography
                                    variant = 'body1'
                                    color = 'textSecondary'
                                    className = { classes.text }
                                >
                                    По состоянию на { formatedDateVacancy }
                                </Typography>
                                <Table
                                    actionColumns = { configActionColumns }
                                    tableHeaderColor = 'primary'
                                    tableHead = {['№', 'Вакансия', 'Требования']}
                                    tableData = { vacancys }
                                />
                            </React.Fragment>
                        ) : (
                                <Typography
                                    variant = 'body1'
                                    color = 'textSecondary'
                                    className = { classes.text }
                                >
                                    Вакансии отсутствуют.
                                </Typography>
                            )
                    }
                </CardContent>
            </Card>
        );
    }
}
/*
<br />
                                <Table 
                                    classes = {{
                                        root: classes.root,
                                        body: classes.body,
                                    }}
                                    className = { classes.table } 
                                >
                                    <TableHead>
                                        <TableRow >
                                            <CustomTableCell>Вакансия</CustomTableCell>
                                            <CustomTableCell>Требования</CustomTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        rows.map(r => (
                                            <TableRow hover = { true } key = { r.id }>
                                                <CustomTableCell component = 'th' scope = 'row'>
                                                    { r.vacancy }
                                                </CustomTableCell>
                                                <CustomTableCell>{ r.requirements }</CustomTableCell>
                                            </TableRow>
                                        ))
                                    }
                                    </TableBody>
                                </Table>
const rows = [
    {
        id: 1,
        vacancy: 'экскаваторщик',
        requirements: 'знать мат часть',
    },
];
*/

export default withStyles(styles, { name: 'muiVacanciesView', flip: false, withTheme: true })(VacanciesView);
//export { VacanciesView as VacanciesViewNotConnected };
