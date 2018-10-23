import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const avatarMan = '/static/images/avatar.png';
const avatarWoman = '/static/images/avatar_w.png';

class LeadershipView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    state = {
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { сard } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Руководство компании'
                    titleTypographyProps = { сard.title }
                />
                <CardHeader
                    subheader = '«Брюховецкое водопроводное хозяйство», ООО'
                    subheaderTypographyProps = { сard.headline }
                />
                <GridList
                    cols = { 3 }
                    padding = { 1 }
                    cellHeight = 'auto'
                    style = {{
                        overflowY: 'auto',
                        height: 350,
                    }}
                >
                    <GridListTile 
                        key = { avatarMan } 
                    >
                        <img 
                            src = { avatarMan } 
                            style = { сard.header }
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
                        />
                    </GridListTile>
                    <GridListTile 
                        key = { avatarWoman } 
                    >
                        <img 
                            src = { avatarWoman } 
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
                        />
                    </GridListTile>
                </GridList>

                <br/>
                <Divider />

                <CardHeader
                    subheader = '«Брюховецкое предприятие отвода и очистки стоков», ООО'
                    subheaderTypographyProps = { сard.headline }
                />
                <GridList
                    cols = { 3 }
                    padding = { 1 }
                    cellHeight = 'auto'
                    style = {{
                        overflowY: 'auto',
                        height: 350,
                    }}
                >
                    <GridListTile 
                        key = { avatarMan } 
                    >
                        <img 
                            src = { avatarMan } 
                            style = { сard.header }
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
                        />
                    </GridListTile>
                    <GridListTile 
                        key = { avatarWoman } 
                    >
                        <img 
                            src = { avatarWoman } 
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
                        />
                    </GridListTile>
                </GridList>

                <CardContent 
                    style = { сard.text }
                >
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiLeadershipView', flip: false, withTheme: true })(LeadershipView);
export { LeadershipView as LeadershipViewNotConnected };
/*
*/