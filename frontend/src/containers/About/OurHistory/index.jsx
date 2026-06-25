import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

function OurHistoryView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Наша история'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em',
                    }}
                >
                    «Дату 18 апреля 1954 года можно считать днем рождения брюховецкого водопровода. Именно в этот воскресный день 350 работников учреждений и организаций  района вышли на воскресник для прокладки трассы будущего водопровода. Накануне по будущей трассе прошел канавокопатель Брюховецкого МТС, который обозначил и углубил траншею на 40 сантиметров. Это значительно облегчило работу участникам воскресника.<br />
                </Typography>
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em',
                    }}
                >
                    Водопроводная сеть станицы каждый год увеличивалась. В 1956 году проложено 5000 погонных метров водопровода. Водопровод дошел до перекрестка улиц  Красная - Ковалева, Ленина-Кирова, Тимофеева – Кирова.<br />
                </Typography>
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em',
                    }}
                >
                    В 1957 году проложено всего 840 метров водопроводных линий, а в 1958 -  5400 метров. На начало 1959 года в станице было уже 27 водозаборных колонок, и в том же году водопроводная сеть увеличилась еще на 8 000 метров.<br />
                </Typography>
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em',
                    }}
                >
                    В 1960 году произведен ремонт имеющейся артскважины,  завершились работы по бурению и оборудованию двух дополнительных скважин, а также по строительству 25-ти метровой водонапорной башни.<br />
                    С этого года станица Брюховецкая стараниями многих  людей, работающих в водопроводном хозяйстве, перестала ощущать острый недостаток в воде.»
                </Typography>
                <a href = 'http://bru-museum.ru/stati/istoriya-2/317-istoriya-stanichnogo-vodoprovoda' target = '_blank'><cite>http://bru-museum.ru/stati/istoriya-2/317-istoriya-stanichnogo-vodoprovoda</cite></a>
            </CardContent>
        </Card>
    );
}

OurHistoryView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default OurHistoryView;
