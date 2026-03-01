import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '../Snackbar/Snackbar';
import NotificationType from './NotificationType';
import { useTheme } from '@mui/material/styles';
import * as helper from './helper';
import NotificationItemPropTypes from './NotificationItemPropTypes';

function NotificationPopupItem(props) {
  const { id, type, icon, title, message, place, open, onClose, autoClose, displayIn } = props;
  const [timeoutId, setTimeoutId] = React.useState(undefined);

  const setCallbackTimeout = React.useCallback((props) => {
    const { onClose, open, autoClose, displayIn } = props;

    if (!onClose || open !== true || autoClose !== true || displayIn <= 0)
      return;

    if (timeoutId) return;
    const newTimeoutId = setTimeout(() => {
      onClose({ id });
      setTimeoutId(undefined);
    }, displayIn);
    setTimeoutId(newTimeoutId);
  }, [id, onClose, timeoutId]);

  React.useEffect(() => {
    setCallbackTimeout(props);
  }, [props, setCallbackTimeout]);

  const onClosing = () => {
    onClose({ id });
    setTimeoutId(undefined);
  };

  return (
    <Snackbar
      key={id}
      place={place}
      onClose={onClosing}
      open={open}
      color={helper.getColor(type)}
      close
      icon={icon === true ? helper.getIcon(type) : icon}
      message={
        <React.Fragment>
          {title && <div style={{ fontWeight: 'bold' }}>{title}</div>}
          {message}
        </React.Fragment>
      }
    />
  );
}

NotificationPopupItem.defaultProps = {
  place: 'tr',
  autoClose: true,
  type: NotificationType.INFO,
  open: true,
  icon: true
};

NotificationPopupItem.propTypes = {
  ...NotificationItemPropTypes,
  displayIn: PropTypes.number,
  autoClose: PropTypes.bool
};

const NotificationPopupItemWithTheme = (props) => {
  const theme = useTheme();
  return <NotificationPopupItem {...props} theme={theme} />;
};

export default NotificationPopupItemWithTheme;
