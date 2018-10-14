import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
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
        expanded: false,
    };

    constructor(props, context) {
        super(props, context);
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded} );
    };
    
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
                    title = '«Брюховецкое водопроводное хозяйство», ООО'
                    titleTypographyProps = { сard.header }
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
                    title = '«Брюховецкое предприятие отвода и очистки стоков», ООО'
                    titleTypographyProps = { сard.header }
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

export default withTheme()(LeadershipView);
export { LeadershipView as LeadershipViewNotConnected };
/*
*/