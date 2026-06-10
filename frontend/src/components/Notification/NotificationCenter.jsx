import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import NotificationPanel from './NotificationPanel';

import NotificationPopup from './NotificationPopup';
import { Notifications, NotificationsActive } from '@mui/icons-material';
import { Badge, Tooltip, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Button from '../CustomButtons/Button';
import NotificationItemPropTypes from './NotificationItemPropTypes';
import linq from 'linq';
import { getUnreadItems, getItemsForPopup } from './helper';

const primaryColor = '#9c27b0';
const grayColor = '#999999';

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'ownerState'
})(({ theme, ownerState }) => {
    const { badgeColor } = ownerState;

    return {
        '& .button': {
            // Base button styles
        },
        '& .badge': {
            width: '20px',
            height: '20px',
            fontSize: theme.typography.pxToRem(10)
        },
        '& .colorSecondary': {
            backgroundColor: grayColor
        },
        '& .icon': {
            // Base icon styles
        },
        '& .iconActive': {
            color: primaryColor
        },
        '& .tooltip': {
            background: theme.palette.common.white,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[1],
            fontSize: 11
        },
        '& .arrowPopper': {
            '&[x-placement*="bottom"] .arrowArrow': {
                top: 0,
                left: 0,
                marginTop: '-0.9em',
                width: '3em',
                height: '1em',
                '&::before': {
                    borderWidth: '0 1em 1em 1em',
                    borderColor: `transparent transparent ${theme.palette.common.white} transparent`
                }
            },
            '&[x-placement*="top"] .arrowArrow': {
                bottom: 0,
                left: 0,
                marginBottom: '-0.9em',
                width: '3em',
                height: '1em',
                '&::before': {
                    borderWidth: '1em 1em 0 1em',
                    borderColor: `${theme.palette.grey[700]} transparent transparent transparent`
                }
            },
            '&[x-placement*="right"] .arrowArrow': {
                left: 0,
                marginLeft: '-0.9em',
                height: '3em',
                width: '1em',
                '&::before': {
                    borderWidth: '1em 1em 1em 0',
                    borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`
                }
            },
            '&[x-placement*="left"] .arrowArrow': {
                right: 0,
                marginRight: '-0.9em',
                height: '3em',
                width: '1em',
                '&::before': {
                    borderWidth: '1em 0 1em 1em',
                    borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`
                }
            }
        },
        '& .arrowArrow': {
            position: 'absolute',
            fontSize: 7,
            width: '3em',
            height: '3em',
            '&::before': {
                content: '""',
                margin: 'auto',
                display: 'block',
                width: 0,
                height: 0,
                borderStyle: 'solid'
            }
        }
    };
});

function defaultButtonComponent({ onClick, items, badgeColor, ...others }) {
    return (
        <StyledButton className="button" onClick={onClick} ownerState={{ badgeColor }} {...others}>
            {items.length > 0 && (
                <Badge
                    badgeContent={items.length > 99 ? 99 : items.length}
                    color={badgeColor}
                    sx={{
                        '& .MuiBadge-badge': {
                            width: '20px',
                            height: '20px',
                            fontSize: '0.625rem'
                        }
                    }}
                >
                    <NotificationsActive className="icon iconActive" />
                </Badge>
            )}
            {items.length <= 0 && <Notifications className="icon" />}
        </StyledButton>
    );
}

function defaultNotificationPanelComponent(props) {
    return <NotificationPanel {...props} />;
}

function NotificationCenter({
    ButtonComponent = defaultButtonComponent,
    ButtonProps = {},
    NotificationPanelComponent = defaultNotificationPanelComponent,
    NotificationPanelProps = {},
    items = [],
    title = 'Notification Center',
    badgeColor = 'secondary',
    unReadBadgeColor = 'error',
    displayIn = 3000,
    subsequentDelay = 600,
    image,
    onChange,
    onDelete
}) {
    const [panelOpen, setPanelOpen] = useState(false);
    const [arrowRef, setArrowRef] = useState(null);

    const onClick = useCallback(() => {
        setPanelOpen((prev) => !prev);
    }, []);

    const onPanelClose = useCallback(
        (items) => {
            setPanelOpen(false);
            const finalItems = linq
                .from(items)
                .where((i) => i.status !== 'READ')
                .select((i) => ({
                    id: i.id,
                    status: 'READ'
                }))
                .toArray();
            if (onChange) onChange(finalItems);
        },
        [onChange]
    );

    const onItemClose = useCallback(
        (items) => {
            if (onChange) onChange(items.map((item) => ({ id: item.id, status: 'DELETED' })));
            if (onDelete) onDelete(items);
        },
        [onChange, onDelete]
    );

    const onPopupClose = useCallback(
        (item) => {
            if (onChange) onChange([{ id: item.id, status: 'NOTIFIED' }]);
        },
        [onChange]
    );

    const handleArrowRef = useCallback((node) => {
        setArrowRef(node);
    }, []);

    const unReadItems = getUnreadItems(items);
    const popupItems = getItemsForPopup(items);

    return (
        <>
            <Tooltip
                title={
                    <>
                        {title}
                        <span className="arrowArrow" ref={handleArrowRef} />
                    </>
                }
                placement="bottom"
                PopperProps={{
                    popperOptions: {
                        modifiers: [
                            {
                                name: 'arrow',
                                enabled: Boolean(arrowRef),
                                options: {
                                    element: arrowRef
                                }
                            }
                        ]
                    }
                }}
            >
                <ButtonComponent
                    {...ButtonProps}
                    badgeColor={unReadItems.length > 0 ? unReadBadgeColor : badgeColor}
                    items={unReadItems.length > 0 ? unReadItems : items}
                    onClick={onClick}
                />
            </Tooltip>

            <NotificationPanelComponent
                {...NotificationPanelProps}
                image={image}
                items={items}
                title={title}
                open={panelOpen}
                onPanelClose={onPanelClose}
                onItemClose={onItemClose}
            />
            <NotificationPopup
                items={popupItems}
                displayIn={displayIn}
                subsequentDelay={subsequentDelay}
                onClose={onPopupClose}
            />
        </>
    );
}

NotificationCenter.propTypes = {
    ButtonComponent: PropTypes.func,
    ButtonProps: PropTypes.object,
    NotificationPanelComponent: PropTypes.func,
    NotificationPanelProps: PropTypes.object,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes)),
    displayIn: PropTypes.number,
    subsequentDelay: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    badgeColor: PropTypes.oneOf(['primary', 'secondary', 'error']),
    unReadBadgeColor: PropTypes.oneOf(['primary', 'secondary', 'error']),
    image: PropTypes.string
};

const NotificationCenterWithTheme = (props) => {
    const theme = useTheme();
    return <NotificationCenter {...props} theme={theme} />;
};

export default NotificationCenterWithTheme;
