import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CardHeader from '../../../components/Card/CardHeader.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
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
        const { ul, li, RedLine } = this.props.theme;
        //const { subParagraf } = this.props.theme;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'О компании'
                />
                <CardContent
                    style = { сard.text }
                    titleTypographyProps = { сard.titleTypography }
                    style = { сard.title }
                >
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>ООО «Брюховецкое водопроводное хозяйство» (ООО «БВХ»)</strong> зарегистрировано 23 декабря 2005г.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Основным структурным подразделением ООО «БВХ» является цех водопровода, обеспечивающий круглосуточное обслуживание водозаборов и насосных станций подкачек, ремонт артезианских скважин и водопроводных сетей.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Предприятие оказывает услуги на территории Брюховецкого (ст. Брюховецкая, 9 хуторов), Переясловского (ст. Переясловская) и Свободненского (с. Свободное)
                        сельских поселений муниципального образования Брюховецкий район.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Производственную деятельность по холодному водоснабжению ООО «БВХ» начало осуществлять в ст.Брюховецкой с 01.02.2006г, в остальных населенных пунктах с 16.09.2011г.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        В силу геологического расположения добыча воды ведется только из подземных источников артезианских скважин глубиной от 80 до 800 метров.
                        На обслуживании ООО «БВХ» находится <strong>296,1 км</strong> водопроводных сетей, <strong>39</strong> артезианских скважин и <strong>4</strong> водозабора.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        Фактическая структура абонентов по водопотреблению за 2012 год составляет:
                    </Typography>
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
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        На всех водозаборах перед подачей воды населению производится обеззараживание водопроводных сетей хлорной водой, которая готовится из хлорной извести непосредственно перед внесением.
                        Хлорирование производится после проведения ремонтных работ и технологических нарушений, по эпидемиологическим показаниям.<br />
                    </Typography>
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        На период паводков и чрезвычайных ситуаций должен устанавливаться усиленный режим контроля питьевой воды в соответствии с рабочей программой по согласованию с центром «Госсанэпиднадзора».
                        Производственный контроль качества питьевой воды в соответствии с рабочей программой осуществляется лабораторией ФГУЗ «Центр гигиены и эпидемиологии в Краснодарском крае».<br />
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Typography
                        variant = 'body1'
                        color = 'textSecondary'
                        className = { classes.text }
                    >
                        <strong>ООО «Брюховецкое предприятие отвода и очистки стоков» (ООО «БООС»)</strong> зарегистрировано 23 декабря 2005 года.<br/>
                        Предприятие оказывает услуги по водоотведению на территории ст. Брюховецкая<br />
                        За 2017 год произведена очистка <strong>571 тыс.кубометров</strong> сточных вод.
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiCommonInfoView', flip: false, withTheme: true })(CommonInfoView);
//export { CommonInfoView as CommonInfoViewNotConnected };
