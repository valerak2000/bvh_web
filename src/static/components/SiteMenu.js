import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {FlatButton} from 'material-ui/FlatButton';
import {FontIcon} from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

//                style={this.props.muiTheme.appBar.tabs}
export function SiteMenu() {
    return (
            <Tabs>
                <Tab label="О компании" />
                <Tab label="Абонентам" />
                <Tab label="Новости" />
                <Tab label="Контакты" />
            </Tabs>
    );
}

/*
        <div>
            <ToolbarGroup>
                <FlatButton
                    label="Dashboard"
                    icon = {
                        <FontIcon
                            className = "fa fa-sign-in"
                        />
                    }
                />
            </ToolbarGroup>
        </div>

            <Tabs
                    style={{
        textColor: Colors.blue900,
        backgroundColor: Colors.lightGreen50,
        selectedTextColor: Colors.blue900,
        width: '100%',
        textTransform: 'none',
    }}
            >
                <Tab label="О компании"
                />
                <Tab label="Абонентам" />
                <Tab label="Новости" />
                <Tab label="Контакты" />
            </Tabs>
*/