import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {FlatButton} from 'material-ui/FlatButton';
import {FontIcon} from 'material-ui/FontIcon';
import {IconButton} from 'material-ui/IconButton';
import * as Colors from 'material-ui/styles/colors';

export function SiteMenu(props) {
    return (
        <Tabs style = { props.muiTheme }
        >
            <Tab label = "О компании" style = {{ textTransform: 'none' }}/>
            <Tab label = "Абонентам" style = {{ textTransform: 'none' }}/>
            <Tab label = "Новости" style = {{ textTransform: 'none' }}/>
            <Tab label = "Контакты" style = {{ textTransform: 'none' }}/>
        </Tabs>
    );
}

/*
style = {{ width: '100%',
            height: 'inherit',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
            }}

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