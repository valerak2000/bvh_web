import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Table from '../../../components/Table/Table.jsx';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    root: {
        borderTop: `1px solid
        ${
          theme.palette.type === 'light'
            ? lighten(fade(theme.palette.divider, 1), 0.88)
            : darken(fade(theme.palette.divider, 1), 0.68)
        }`, 
    },
    table: {
        minWidth: 700,
    },
    /*body: {
        color: theme.palette.text.secondary,
    },*/
    text: {
        margin: 'auto auto auto 2rem',
    },
});

/*
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.gray[50],
        color: theme.palette.common.white,
    },
    body: {
        color: theme.palette.text.secondary,
    },
}))(TableCell);
*/

const dateVacancy = new Date();

const rows = [
    {
        id: 1,
        vacancy: 'экскаваторщик',
        requirements: 'знать мат часть',
    },
];

const vacancyData = [
    [1, 'экскаваторщик', 'знать мат часть']
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
        const { сard } = this.props.theme.app;
        const formatedDateVacancy = moment().format('LL');

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Вакансии'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    {
                        rows.length > 0 ? (
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
                                    tableHead = {['Вакансия', 'Требования']}
                                    tableData = {[
                                        ['экскаваторщик', 'знать мат часть']
                                    ]}
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
*/

export default withStyles(styles, { name: 'muiVacanciesView', flip: false, withTheme: true })(VacanciesView);
//export { VacanciesView as VacanciesViewNotConnected };
