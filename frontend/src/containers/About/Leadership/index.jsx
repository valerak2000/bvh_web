import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const avatarMan = '/static/images/avatar.png';
const avatarWoman = '/static/images/avatar_w.png';
const styles = theme => ({
    title: {
        color: theme.palette.primary,
        whiteSpace: 'normal',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

class LeadershipView extends Component {
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
                    title = 'Руководство компании'
                    { ...this.props }
                />
                <CardHeader
                    subheader = '«Брюховецкое водопроводное хозяйство», ООО'
                    { ...this.props }
                />
                <GridList
                    cols = { 3 }
                    padding = { 1 }
                    cellHeight = 'auto'
                    style = {{
                        overflowY: 'auto',
                        height: 250,
                    }}
                >
                    <GridListTile 
                        key = { avatarMan } 
                    >
                        <img 
                            src = { avatarMan } 
                            style = { card.header }
                        />
                        <GridListTileBar
                            title = 'Ляшенко Александр Николаевич'
                            subtitle = 'Директор'
                            titlePosition = 'bottom'
                            actionIcon = {
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            }
                            classes = {{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                    <GridListTile 
                        key = { avatarWoman } 
                    >
                        <img 
                            src = { avatarWoman } 
                            style = { card.header }
                        />
                        <GridListTileBar
                            title = 'Романова Ольга Григорьевна'
                            subtitle = 'Главный бухгалтер'
                            titlePosition = 'bottom'
                            actionIcon = {
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            }
                            classes = {{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                </GridList>

                <br/>
                <Divider />

                <CardHeader
                    subheader = '«Брюховецкое предприятие отвода и очистки стоков», ООО'
                    { ...this.props }
                />
                <GridList
                    cols = { 3 }
                    padding = { 1 }
                    cellHeight = 'auto'
                    style = {{
                        overflowY: 'auto',
                        height: 250,
                    }}
                >
                    <GridListTile 
                        key = { avatarMan } 
                    >
                        <img 
                            src = { avatarMan } 
                            style = { card.header }
                        />
                        <GridListTileBar
                            title = "Дьяченко Владимир Анатольевич"
                            subtitle = "Директор" 
                            titlePosition = 'bottom'
                            actionIcon = {
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            }
                            classes = {{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                    <GridListTile 
                        key = { avatarWoman } 
                    >
                        <img 
                            src = { avatarWoman } 
                            style = { card.header }
                        />
                        <GridListTileBar
                            title = 'Романова Ольга Григорьевна'
                            subtitle = 'Главный бухгалтер'
                            titlePosition = 'bottom'
                            actionIcon = {
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            }
                            classes = {{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                </GridList>

                <CardContent 
                    style = { card.text }
                >
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiLeadershipView', flip: false, withTheme: true })(LeadershipView);
//export { LeadershipView as LeadershipViewNotConnected };
/*
*/