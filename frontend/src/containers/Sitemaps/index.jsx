// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

import CardHeader from '../../components/Card/CardHeaderImpl.jsx';
import { MENU } from '../../constants/menuStruct';

function ListSiteMaps(props) {
    const theme = useTheme();
    const { items, onClick, topLevel } = props;

    const listItems = items.map((item, index) => {
        const isDisabled =
            item.dataRoute === undefined || item.dataRoute === null || item.disabled === true;

        const iconStyle = {
            marginRight: 0,
            color: alpha(theme.palette.text.secondary, 0.64)
        };

        const textStyle = {
            margin: 'auto auto auto 0.5rem',
            textAlign: 'justify',
            textIndent: '1.5em'
        };

        const mapItemStyle = {
            paddingTop: 0,
            paddingBottom: 0
        };

        const childrenStyle = {
            paddingLeft: theme.spacing(8)
        };

        let itemMap;
        if (isDisabled) {
            itemMap = (
                <ListItem key={item.key} disableGutters sx={mapItemStyle}>
                    {item.leftIcon && <ListItemIcon sx={iconStyle}>{item.leftIcon}</ListItemIcon>}
                    {topLevel ? (
                        <Typography variant="body1" color="textSecondary" sx={textStyle}>
                            <strong>{item.primaryText}</strong>
                            <br />
                        </Typography>
                    ) : (
                        <ListItemText
                            primary={item.primaryText}
                            primaryTypographyProps={{
                                variant: 'body1',
                                color: 'textSecondary'
                            }}
                        />
                    )}
                </ListItem>
            );
        } else {
            itemMap = (
                <ListItemButton
                    key={item.key}
                    disableGutters
                    sx={mapItemStyle}
                    onClick={(e) => onClick(item.dataRoute, e)}
                >
                    {item.leftIcon && <ListItemIcon sx={iconStyle}>{item.leftIcon}</ListItemIcon>}
                    <ListItemText
                        primary={item.primaryText}
                        primaryTypographyProps={{
                            variant: 'body1',
                            color: 'textSecondary'
                        }}
                    />
                </ListItemButton>
            );
        }

        return (
            <Box key={index}>
                {itemMap}
                {item.children !== undefined &&
                    item.children.length > 0 &&
                    item.disabled !== true && (
                        <Collapse in={true} timeout="auto" unmountOnExit sx={childrenStyle}>
                            <ListSiteMaps
                                items={item.children}
                                onClick={onClick}
                                topLevel={false}
                            />
                        </Collapse>
                    )}
            </Box>
        );
    });

    return (
        <Box>
            {items.length > 0 ? (
                <List disablePadding>{listItems}</List>
            ) : (
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em'
                    }}
                >
                    Карта сайта отсутствует.
                </Typography>
            )}
        </Box>
    );
}

ListSiteMaps.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    topLevel: PropTypes.bool
};

function MapsView(props) {
    const theme = useTheme();
    const { history } = props;

    const handleClick = (dataRoute, _e) => {
        history.push(dataRoute);
    };

    const cardStyle = theme.app?.card || {};

    return (
        <Card square={true} sx={cardStyle}>
            <CardHeader title="Карта сайта" {...props} />
            <CardContent>
                <Box
                    sx={{
                        display: 'block',
                        margin: '-1rem auto'
                    }}
                >
                    <ListSiteMaps items={MENU} onClick={handleClick} topLevel={true} />
                </Box>
            </CardContent>
        </Card>
    );
}

MapsView.propTypes = {
    history: PropTypes.object.isRequired
};

export default MapsView;
