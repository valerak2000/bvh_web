import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';
import NotificationGroup from './NotificationGroup';
import NotificationItemPropTypes from './NotificationItemPropTypes';
import { getGroupItems } from './helper';

const StyledDrawer = styled(Drawer)(({ theme, ownerstate }) => {
    const { position } = ownerstate;

    const drawerWidth = 260;
    const width = drawerWidth + 30;

    const boxShadow = {
        boxShadow:
            '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    };

    const transition = {
        transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
    };

    return {
        '& .MuiDrawer-paper': {
            position: 'fixed',
            zIndex: 1,
            top: '0',
            ...boxShadow,
            transform: `translate3d(${position === 'right' ? width : 0}px, 0, 0)`,
            ...transition,
            width: width
        }
    };
});

const StyledBackground = styled('div')(({ image }) => ({
    position: 'absolute',
    zIndex: '0',
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: image ? `url(${image})` : 'none',
    '&:after': {
        position: 'absolute',
        zIndex: '3',
        width: '100%',
        height: '100%',
        content: '\'\'',
        display: 'block',
        background: '#000',
        opacity: '.8'
    }
}));

const StyledLogo = styled('div')({
    position: 'relative',
    padding: '15px 15px',
    zIndex: '4',
    '&:after': {
        content: '\'\'',
        position: 'absolute',
        bottom: '0',
        height: '1px',
        right: '15px',
        width: 'calc(100% - 30px)',
        backgroundColor: 'rgba(180, 180, 180, 0.3)'
    }
});

const StyledLogoText = styled('span')({
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    lineHeight: '1.5em',
    textTransform: 'uppercase',
    padding: '5px 0 0 40px',
    display: 'block',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    color: '#FFFFFF'
});

const StyledIcon = styled('div')({
    width: '35px',
    top: '22px',
    position: 'absolute',
    verticalAlign: 'middle',
    border: '0',
    color: '#00acc1'
});

const StyledContainWrapper = styled('div')({
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    zIndex: '10000',
    overflowScrolling: 'touch',
    display: 'block',
    top: '0',
    left: '0'
});

const StyledList = styled(List)(({ theme }) => ({
    // Custom list styles
}));

function defaultGroupComponent({ onClose, items, open }) {
    return (
        <StyledList>
            {items.map((g, i) => (
                <NotificationGroup
                    key={i}
                    {...g}
                    onClose={onClose}
                    open={items.length <= 1 && i === 0}
                />
            ))}
        </StyledList>
    );
}

function defaultBackgroundComponent({ image }) {
    if (!image) return null;
    return <StyledBackground image={image} />;
}

function defaultTitleComponent({ title }) {
    if (!title) return null;

    return (
        <StyledLogo>
            <MessageIcon
                sx={{
                    width: '35px',
                    top: '22px',
                    position: 'absolute',
                    verticalAlign: 'middle',
                    border: '0',
                    color: '#00acc1'
                }}
            />
            <StyledLogoText>{title}</StyledLogoText>
        </StyledLogo>
    );
}

function NotificationPanel({
    GroupComponent = defaultGroupComponent,
    BackgroundComponent = defaultBackgroundComponent,
    TitleComponent = defaultTitleComponent,
    position = 'right',
    open = false,
    onPanelClose,
    onItemClose,
    items,
    image,
    title,
    ...others
}) {
    const groups = getGroupItems(items);

    return (
        <StyledDrawer
            variant="temporary"
            anchor={position}
            open={open}
            onClose={() => onPanelClose(items)}
            ownerState={{ position }}
            slotProps={{
                backdrop: {
                    invisible: true
                }
            }}
        >
            <BackgroundComponent image={image} />
            <StyledContainWrapper>
                <TitleComponent title={title} />
                <GroupComponent {...others} items={groups} onClose={onItemClose} />
            </StyledContainWrapper>
        </StyledDrawer>
    );
}

NotificationPanel.defaultProps = {
    GroupComponent: defaultGroupComponent,
    BackgroundComponent: defaultBackgroundComponent,
    TitleComponent: defaultTitleComponent,
    position: 'right',
    open: false
};

NotificationPanel.propTypes = {
    GroupComponent: PropTypes.func,
    BackgroundComponent: PropTypes.func,
    TitleComponent: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes)).isRequired,
    position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    open: PropTypes.bool,
    onPanelClose: PropTypes.func.isRequired,
    onItemClose: PropTypes.func.isRequired,
    image: PropTypes.string,
    title: PropTypes.string
};

const NotificationPanelWithTheme = (props) => {
    const theme = useTheme();
    return <NotificationPanel {...props} theme={theme} />;
};

export default NotificationPanelWithTheme;
