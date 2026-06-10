import React from 'react';
import PropTypes from 'prop-types';
import NotificationType from './NotificationType';
import dayjs from 'dayjs';
import { ListItem, IconButton, Tooltip, Grid, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import * as helper from './helper';
import NotificationItemPropTypes from './NotificationItemPropTypes';
import NotificationStatus from './NotificationStatus';
import classnames from 'classnames';

const primaryColor = '#9c27b0';
const infoColor = '#00acc1';
const successColor = '#4caf50';
const warningColor = '#ff9800';
const dangerColor = '#f44336';

const StyledListItem = styled(ListItem, {
    shouldForwardProp: (prop) => prop !== 'ownerState'
})(({ theme, ownerState }) => {
    const { type, highlight } = ownerState;

    const colorStyles = {
        success: { color: successColor, marginRight: 0 },
        danger: { color: dangerColor, marginRight: 0 },
        warning: { color: warningColor, marginRight: 0 },
        info: { color: infoColor, marginRight: 0 },
        confirm: { color: primaryColor, marginRight: 0 }
    };

    return {
        width: 'auto',
        transition: 'all 300ms linear',
        margin: '5px 5px 0',
        borderRadius: '3px',
        position: 'relative',
        padding: '10px 10px',
        border: '1px solid rgba(180, 180, 180, 0.3)',
        ...(highlight && {
            border: `1px solid ${warningColor}`
        }),
        '& .date': {
            textAlign: 'right',
            fontSize: theme.typography.pxToRem(10),
            fontWeight: 400,
            color: 'white'
        },
        '& .title': {
            fontSize: theme.typography.pxToRem(13),
            fontWeight: 550,
            color: 'white',
            paddingLeft: '10px'
        },
        '& .message': {
            fontSize: theme.typography.pxToRem(12),
            textAlign: 'justify',
            color: 'white'
        },
        '& .iconButton': {
            width: '24px',
            height: '24px'
        },
        '& .close': {
            width: '11px',
            height: '11px',
            color: 'white'
        },
        '& .tooltip': {
            background: theme.palette.common.white,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[1],
            fontSize: 11
        },
        ...(type &&
            colorStyles[type] && {
                '& .icon': colorStyles[type]
            })
    };
});

function defaultFormatDate(date) {
    if (date instanceof Date) date = dayjs(date);
    if (!date || !dayjs.isDayjs(date)) return date;
    const now = dayjs();

    if (now.diff(date, 'minutes') <= 1) return 'now';
    if (now.diff(date, 'hours') <= 5) return date.format('h') + ' ago';
    if (now.diff(date, 'days') <= 1) return 'today ' + date.format('HH:mm');

    const diff = now.diff(date, 'days');
    if (diff > 1 && diff <= 2) return 'yesterday';

    return `${diff} days`;
}

function NotificationItem({
    title,
    message,
    type,
    status,
    onClose,
    onClick,
    formatDate = defaultFormatDate,
    createdOn
}) {
    const Icon = helper.getIcon(type);
    const isNew = status === NotificationStatus.NEW || status === NotificationStatus.NOTIFIED;

    const ownerState = { type, highlight: isNew };

    return (
        <StyledListItem ownerState={ownerState} onClick={onClick}>
            <Grid container spacing={0}>
                <Grid item xs={1} className={type}>
                    <Icon />
                </Grid>
                <Grid item xs={8} className="title">
                    {title}
                </Grid>
                <Grid item xs={3} className="date">
                    {formatDate(createdOn)}
                </Grid>
                <Grid item xs={11} className="message">
                    {message}
                </Grid>
                <Grid item xs={1}>
                    <Tooltip title={'close'} placement="top">
                        <IconButton className="iconButton" onClick={onClose} size="large">
                            <CloseIcon className="close" />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </StyledListItem>
    );
}

NotificationItem.defaultProps = {
    type: NotificationType.INFO,
    icon: true,
    formatDate: defaultFormatDate
};

NotificationItem.propTypes = {
    ...NotificationItemPropTypes,
    formatDate: PropTypes.func
};

const NotificationItemWithTheme = (props) => {
    const theme = useTheme();
    return <NotificationItem {...props} theme={theme} />;
};

export default NotificationItemWithTheme;
