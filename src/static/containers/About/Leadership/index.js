import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

import avatarMan from '../../../images/avatar.png';
import avatarWoman from '../../../images/avatar_w.png';

class LeadershipView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded} );
    };
    
    render() {
//                        width: 700,

        return (
            <Card
                style = { this.props.muiTheme.app.сard }
            >
                <CardTitle
                    title = 'Руководство компании'
                    titleStyle = { this.props.muiTheme.app.сard.title }
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
                    <GridTile
                        key = { avatarMan } 
                        title = "Ляшенко Александр Николаевич"
                        subtitle = "Директор" 
                        titlePosition = "bottom"
                    >
                        <img 
                            src = { avatarMan } 
                            style = { this.props.muiTheme.app.сard.title }
                        />
                    </GridTile>
                    <GridTile
                        key = { avatarWoman } 
                        title = "Романова Ольга Григорьевна"
                        subtitle = "Главный бухгалтер" 
                        titlePosition = "bottom"
                    >
                        <img 
                            src = { avatarWoman } 
                        />
                    </GridTile>
                </GridList>

                <CardText 
                    expandable = { false }
                    style = { this.props.muiTheme.app.сard.text }
                >
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(LeadershipView));
export { LeadershipView as LeadershipViewNotConnected };
/*
                        titleBackground = "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"

style = {{
                                MaxWidth: '30%',
                                objectFit: 'contain',
                            }}

<div class="field-item even" property="content:encoded"><p class="rtecenter"><img alt="" src="/sites/default/files/foto/01_gen_dir.jpg" style="height:558px; width:400px" width="400" height="558"></p>

<p class="rtecenter"><span style="font-size:16px">Ляшенко Александр Николаевич</span></p>

<p class="rtecenter"><span style="font-size:16px">Директор</span></p>

<hr><p class="rtecenter"><img alt="" src="/sites/default/files/foto/02_ekon_dir.jpg" style="height:558px; width:400px" width="400" height="558"></p>

<p class="rtecenter"><span style="font-size:16px">Байкова Ирина Владимировна</span></p>

<p class="rtecenter"><span style="font-size:16px">Директор по экономике</span></p>

<hr><p class="rtecenter"><img alt="" src="/sites/default/files/foto/03_gl_ing.jpg" style="height:558px; width:400px" width="400" height="558"></p>

<p class="rtecenter"><span style="font-size:16px">Чудов Вячеслав Валерьевич</span></p>

<p class="rtecenter"><span style="font-size:16px">Главный инженер</span></p>

<hr><p class="rtecenter"><img alt="" src="/sites/default/files/foto/04_oot.jpg" style="height:558px; width:400px" width="400" height="558"></p>

<p class="rtecenter"><span style="font-size:16px">Никитина Елена Степановна</span></p>

<p class="rtecenter"><span style="font-size:16px">Председатель профсоюзного комитета ОАО "Химкинский водоканал"</span></p>

<p class="rtecenter"><span style="font-size:16px">Руководитель службы охраны труда</span></p>
</div>

*/