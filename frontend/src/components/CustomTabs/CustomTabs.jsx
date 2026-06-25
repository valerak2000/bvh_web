import Card from '../Card/Card.jsx';
import CardBody from '../Card/CardBody.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTheme } from '@mui/material/styles';

function CustomTabs(props) {
    const { headerColor, plainTabs, tabs, title, rtlActive, loading } = props;

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const cardTitleClasses = {
        float: 'left',
        padding: '10px 10px 10px 0px',
        lineHeight: '24px',
        ...(rtlActive
            ? {
                  float: 'right',
                  padding: '10px 0px 10px 10px !important'
              }
            : {})
    };

    return (
        <Card plain={plainTabs}>
            <CardHeader color={headerColor} plain={plainTabs}>
                {title !== undefined ? <div style={cardTitleClasses}>{title}</div> : null}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        minHeight: 'unset !important',
                        overflowX: 'visible',
                        '& .MuiTab-root': {
                            fontSize: '0.875rem'
                        }
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {tabs.map((prop, key) => {
                        let icon = {};
                        if (prop.tabIcon) {
                            icon = {
                                icon: <prop.tabIcon />
                            };
                        }
                        return (
                            <Tab
                                key={key}
                                label={prop.tabName}
                                {...icon}
                                sx={{
                                    minHeight: 'unset !important',
                                    minWidth: 'unset !important',
                                    width: 'unset !important',
                                    height: 'unset !important',
                                    maxWidth: 'unset !important',
                                    maxHeight: 'unset !important',
                                    padding: '10px 15px',
                                    borderRadius: '3px',
                                    lineHeight: '24px',
                                    border: '0 !important',
                                    color: '#fff !important',
                                    marginLeft: '4px',
                                    '&:last-child': {
                                        marginLeft: '0px'
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        transition: '0.2s background-color 0.1s'
                                    },
                                    '& .MuiTab-iconWrapper': {
                                        display: 'inline-block',
                                        minHeight: 'unset !important',
                                        minWidth: 'unset !important',
                                        width: 'unset !important',
                                        height: 'unset !important',
                                        maxWidth: 'unset !important',
                                        maxHeight: 'unset !important',
                                        '& > svg, & > .material-icons': {
                                            verticalAlign: 'middle',
                                            margin: '-1px 5px 0 0'
                                        }
                                    }
                                }}
                            />
                        );
                    })}
                </Tabs>
                {loading && <LinearProgress color="secondary" />}
            </CardHeader>
            <CardBody>
                {tabs.map((prop, key) => {
                    if (key === value) {
                        return <div key={key}>{prop.tabContent}</div>;
                    }
                    return null;
                })}
            </CardBody>
        </Card>
    );
}

CustomTabs.propTypes = {
    headerColor: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'secondary']),
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabName: PropTypes.string.isRequired,
            tabIcon: PropTypes.func,
            tabContent: PropTypes.node.isRequired
        })
    ),
    rtlActive: PropTypes.bool,
    plainTabs: PropTypes.bool,
    loading: PropTypes.bool
};

const CustomTabsWithTheme = (props) => {
    const theme = useTheme();
    return <CustomTabs {...props} theme={theme} />;
};

export default CustomTabsWithTheme;
