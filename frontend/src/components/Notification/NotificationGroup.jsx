import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Collapse,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
  styled
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import classnames from 'classnames';

import NotificationItem from './NotificationItem';
import NotificationItemPropTypes from './NotificationItemPropTypes';
import { getUnreadItems } from './helper';

const StyledListItem = styled(ListItem)(({ theme, ownerstate }) => {
  const { open } = ownerstate;

  return {
    ...(open && {
      backgroundColor: theme.palette.primary.main
    }),
    '& .avatar': {
      // Base avatar styles
    },
    '& .avatarNew': {
      backgroundColor: theme.palette.warning.main
    },
    '& .avatarHighlight': {
      backgroundColor: theme.palette.primary.main
    },
    '& .title': {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 500
    },
    '& .iconButton': {
      width: '24px',
      height: '24px'
    },
    '& .close': {
      width: '11px',
      height: '11px'
    },
    '& .tooltip': {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 11
    },
    '& .details': {
      padding: 0
    }
  };
});

function NotificationGroup(props) {
  const { title, items, onClose, open: initialOpen } = props;
  const [open, setOpen] = React.useState(initialOpen);
  const unReadItems = getUnreadItems(items);

  const onClick = () => setOpen(p => !p.open);

  const onItemClose = item => {
    if (onClose) onClose([item]);
  };

  const onCloseAll = () => {
    if (onClose) onClose(items);
  };

  const ownerState = { open };

  return (
    <React.Fragment>
      <StyledListItem
        ownerState={ownerState}
        button
        onClick={onClick}
      >
        <ListItemAvatar>
          <Avatar
            className={classnames(
              'avatar',
              unReadItems.length > 0
                ? 'avatarNew'
                : open
                  ? 'avatarHighlight'
                  : ''
            )}
          >
            {unReadItems.length > 0 ? unReadItems.length : items.length}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ className: 'title' }}
          primary={title}
        />
        {open && (
          <Tooltip
            title="clear"
            placement="top"
          >
            <IconButton className="iconButton" onClick={onCloseAll} size="large">
              <CloseIcon className="close" />
            </IconButton>
          </Tooltip>
        )}
      </StyledListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className="details" component="div" disablePadding>
          {items.map((n, i) => (
            <React.Fragment key={i}>
              <NotificationItem
                {...n}
                onClose={e => {
                  onItemClose(n);
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }}
              />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Collapse>
      <Divider />
    </React.Fragment>
  );
}

NotificationGroup.defaultProps = {
  badgeColor: 'primary',
  open: false
};

NotificationGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes))
    .isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  badgeColor: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'default',
    'error'
  ])
};

const NotificationGroupWithTheme = (props) => {
  const theme = useTheme();
  return <NotificationGroup {...props} theme={theme} />;
};

export default NotificationGroupWithTheme;
