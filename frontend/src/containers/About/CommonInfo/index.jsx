import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    /*text: {
        margin: 'auto auto auto 2rem',
    },*/
});

class CommonInfoView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { classes } = this.props;
        const { сard } = this.props.theme.app;
        const { ul, li, textIdent } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'О компании'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    <p style = { textIdent }>
                        <strong>ООО «Брюховецкое водопроводное хозяйство» (ООО «БВХ»)</strong> зарегистрировано 23.12.2005г.
                    </p>
                    <p style = { textIdent }>
                        Основным структурным подразделением ООО «БВХ» является цех водопровода, обеспечивающий круглосуточное обслуживание водозаборов и насосных станций подкачек, ремонт артезианских скважин и водопроводных сетей.<br />
                    </p>
                    <p style = { textIdent }>
                        Предприятие оказывает услуги на территории Брюховецкого (ст. Брюховецкая, 9 хуторов), Переясловского (ст. Переясловская) и Свободненского (с. Свободное)
                        сельских поселений муниципального образования Брюховецкий район.
                    </p>
                    <p style = { textIdent }>
                        Производственную деятельность по холодному водоснабжению ООО «БВХ» начало осуществлять в ст.Брюховецкой с 01.02.2006г, в остальных населенных пунктах с 16.09.2011г.
                    </p>
                    <p style = { textIdent }>
                        В силу геологического расположения добыча воды ведется только из подземных источников артезианских скважин глубиной от 80 до 800 метров.
                    </p>
                    <p style = { textIdent }>
                        На обслуживании ООО «БВХ» находится <strong>296,1</strong> км водопроводных сетей, <strong>39</strong> артезианских скважин и <strong>4</strong> водозабора.
                    </p>
                    <p style = { textIdent }>
                        Фактическая структура абонентов по водопотреблению за 2012 год составляет:
                        <ul style = { ul }>
                            <li style = { li }>
                                население <strong>86,8%</strong>
                            </li>
                            <li style = { li }>
                                бюджетные организации <strong>3,1%</strong>
                            </li>
                            <li style = { li }>
                                прочие организации <strong>10.1%</strong>
                            </li>
                        </ul>
                    </p>
                    <p style = { textIdent }>
                        На всех водозаборах перед подачей воды населению производится обеззараживание водопроводных сетей хлорной водой, которая готовится из хлорной извести непосредственно перед внесением.<br />
                        Хлорирование производится после проведения ремонтных работ и технологических нарушений, по эпидемиологическим показаниям.
                    </p>
                    <p style = { textIdent }>
                        На период паводков и чрезвычайных ситуаций должен устанавливаться усиленный режим контроля питьевой воды в соответствии с рабочей программой по согласованию с центром «Госсанэпиднадзора».
                        Производственный контроль качества питьевой воды в соответствии с рабочей программой осуществляется лабораторией ФГУЗ «Центр гигиены и эпидемиологии в Краснодарском крае».
                    </p>
                    <Divider />
                    <p style = { textIdent }>
                        <strong>ООО «Брюховецкое предприятие отвода и очистки стоков»</strong> занимается водоотведением ст.Брюховецкой.<br/>
                        Предприятие было образовано 23 декабря 2005 года.<br/>
                    </p>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiCommonInfoView', flip: false, withTheme: true })(CommonInfoView);
//export { CommonInfoView as CommonInfoViewNotConnected };
