import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

function CommonInfoView(props) {
    const theme = useTheme();
    const { app } = theme;
    const { card, ul, li, RedLine } = app;

    return (
        <Card square={true} sx={card}>
            <CardHeader title="О компании" {...props} />
            <CardContent sx={card.text}>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    <strong>ООО «Брюховецкое водопроводное хозяйство» (ООО «БВХ»)</strong>{' '}
                    зарегистрировано 23 декабря 2005г.
                    <br />
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    Основным структурным подразделением ООО «БВХ» является цех водопровода,
                    обеспечивающий круглосуточное обслуживание водозаборов и насосных станций
                    подкачек, ремонт артезианских скважин и водопроводных сетей.
                    <br />
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    Предприятие оказывает услуги на территории Брюховецкого (ст. Брюховецкая, 9
                    хуторов), Переясловского (ст. Переясловская) и Свободненского (с. Свободное)
                    сельских поселений муниципального образования Брюховецкий район.
                    <br />
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    Производственную деятельность по холодному водоснабжению ООО «БВХ» начало
                    осуществлять в ст.Брюховецкой с 01.02.2006г, в остальных населенных пунктах с
                    16.09.2011г.
                    <br />
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    В силу геологического расположения добыча воды ведется только из подземных
                    источников артезианских скважин глубиной от 80 до 800 метров. На обслуживании
                    ООО «БВХ» находится <strong>296,1 км</strong> водопроводных сетей,{' '}
                    <strong>39</strong> артезианских скважин и <strong>4</strong> водозабора.
                    <br />
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    Фактическая структура абонентов по водопотреблению за 2012 год составляет:
                </Typography>
                <ul style={ul}>
                    <li style={li}>
                        население <strong>86,8%</strong>
                    </li>
                    <li style={li}>
                        бюджетные организации <strong>3,1%</strong>
                    </li>
                    <li style={li}>
                        прочие организации <strong>10.1%</strong>
                    </li>
                </ul>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    На всех водозаборах перед подачей воды населению производится обеззараживание
                    водопроводных сетей хлорной водой, которая готовится из хлорной извести
                    непосредственно перед внесением. Хлорирование производится после проведения
                    ремонтных работ и технологических нарушений, по эпидемиологическим показаниям.
                    <br />
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    На период паводков и чрезвычайных ситуаций должен устанавливаться усиленный
                    режим контроля питьевой воды в соответствии с рабочей программой по согласованию
                    с центром «Госсанэпиднадзора». Производственный контроль качества питьевой воды
                    в соответствии с рабочей программой осуществляется лабораторией ФГУЗ «Центр
                    гигиены и эпидемиологии в Краснодарском крае».
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );
}

CommonInfoView.propTypes = {
    theme: PropTypes.object.isRequired
};

export default CommonInfoView;
