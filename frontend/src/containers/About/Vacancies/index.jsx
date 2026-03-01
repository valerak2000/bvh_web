import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Table from '../../../components/Table/Table.jsx';
import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

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

function VacanciesView(props) {
    const theme = useTheme();
    const { card } = theme.app;
    const formatedDateVacancy = moment().format('LL');

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Вакансии'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                {
                    vacancys.length > 0 ? (
                        <React.Fragment key = 'vacancy_table'>
                            <Typography
                                variant = 'body1'
                                color = 'textSecondary'
                                sx = {{
                                    margin: 'auto auto auto 2rem',
                                }}
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
                                sx = {{
                                    margin: 'auto auto auto 2rem',
                                }}
                            >
                                Вакансии отсутствуют.
                            </Typography>
                        )
                }
            </CardContent>
        </Card>
    );
}

VacanciesView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default VacanciesView;
