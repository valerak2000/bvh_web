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
        file: '/static/files/media/БВХ-УСН-2017.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год'
    },
    {
        id: 2,
        file: '/static/files/media/БВХ-УСН-2018.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2018 год'
    },
    {
        id: 3,
        file: '/static/files/media/БВХ-УСН-2019.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2019 год'
    },
    {
        id: 4,
        file: '/static/files/media/БВХ-УСН-2020.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2020 год'
    },
    {
        id: 5,
        file: '/static/files/media/БВХ-УСН-2021.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2021 год'
    },
];

const rowsBoos = [
    {
        id: 1,
        file: '/static/files/media/БООС-УСН-2017.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2017 год'
    },
    {
        id: 2,
        file: '/static/files/media/БООС-УСН-2018.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2018 год'
    },
    {
        id: 3,
        file: '/static/files/media/БООС-УСН-2019.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2019 год'
    },
    {
        id: 4,
        file: '/static/files/media/БООС-УСН-2020.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2020 год'
    },
    {
        id: 5,
        file: '/static/files/media/БООС-УСН-2021.pdf',
        title: 'Декларация по налогу, уплачиваемому в связи с применением УСНО за 2021 год'
    },
];

class ZakupkiRaskrytieNalView extends Component {
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
                    title = 'Налоговая отчетность'
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

export default withStyles(styles, { name: 'muiZakupkiRaskrytieNalView', flip: false, withTheme: true })(ZakupkiRaskrytieNalView);
//export { ZakupkiRaskrytieNalView as ZakupkiRaskrytieNalViewNotConnected };
