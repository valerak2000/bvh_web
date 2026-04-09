import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import GridItem from '../Grid/GridItem.jsx';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import MessageBoxType from './MessageBoxType';
import * as helper from './helper';

const primaryColor = "#9c27b0";
const infoColor = "#00acc1";
const successColor = "#4caf50";
const warningColor = "#ff9800";
const dangerColor = "#f44336";

const StyledDialog = styled(Dialog, {
  shouldForwardProp: (prop) => prop !== 'type',
})(({ type }) => {
  
  const titleType = {
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "25px",
    paddingRight: "25px",
    color: "white",
    fontWeight: "600"
  };

  const colorStyles = {
    confirm: {
      backgroundColor: primaryColor,
      ...titleType
    },
    info: {
      backgroundColor: infoColor,
      ...titleType
    },
    success: {
      backgroundColor: successColor,
      ...titleType
    },
    warning: {
      backgroundColor: warningColor,
      ...titleType
    },
    danger: {
      backgroundColor: dangerColor,
      ...titleType
    }
  };

  const iconColorStyles = {
    confirmIcon: { color: primaryColor },
    infoIcon: { color: infoColor },
    successIcon: { color: successColor },
    warningIcon: { color: warningColor },
    dangerIcon: { color: dangerColor }
  };

  return {
    '& .MuiPaper-root': {
      minWidth: "40%",
      maxWidth: "65%"
    },
    '& .dialogContent': { 
      padding: "1px !important", 
      margin: "1px !important" 
    },
    '& .content': {
      fontSize: "20px",
      display: "table"
    },
    '& .button': {
      minWidth: "80px"
    },
    '& .title': {
      ...(type && colorStyles[type])
    },
    ...iconColorStyles
  };
});

function MessageBox({
  type,
  open,
  title,
  message,
  actionHandler,
  icon,
  okText,
  cancelText,
  ...other
}) {
  let finalIcon = icon;
  if (icon === true) finalIcon = helper.getIcon(type);

  return (
    <StyledDialog
      {...other}
      type={type}
      maxWidth={false}
      fullScreen={false}
      open={open || false}
      aria-labelledby={`message-box-title-${type}`}
    >
      <Typography
        variant="h6"
        className={`title ${type}`}
        id={`message-box-title-${type}`}
      >
        {title || helper.getTitle(type)}
      </Typography>
      <DialogContent className="dialogContent">
        <Grid
          className="content"
          container
          alignItems="baseline"
          direction="row"
          justifyContent="flex-start"
        >
          {finalIcon && (
            <GridItem xs={4} sm={2} md={2} style={{ padding: '0px' }}>
              {finalIcon}
            </GridItem>
          )}

          <GridItem>
            <p>{message}</p>
          </GridItem>
        </Grid>
      </DialogContent>
      <DialogActions>
        {helper.getActions(type, actionHandler, null, okText, cancelText)}
      </DialogActions>
    </StyledDialog>
  );
}

MessageBox.defaultProps = {
  type: MessageBoxType.INFO,
  okText: 'Ok',
  cancelText: 'Cancel',
  open: true,
  icon: true
};

MessageBox.propTypes = {
  type: PropTypes.oneOf([
    MessageBoxType.CONFIRM,
    MessageBoxType.DANGER,
    MessageBoxType.INFO,
    MessageBoxType.SUCCESS,
    MessageBoxType.WARNING
  ]),
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  actionHandler: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
};

const MessageBoxWithTheme = (props) => {
  const theme = useTheme();
  const { theme: _, ...restProps } = props; // Don't pass theme to MessageBox
  return <MessageBox {...restProps} />;
};

export default MessageBoxWithTheme;
