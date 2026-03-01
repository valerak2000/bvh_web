import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { styled } from '@mui/material/styles';
import Snack from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";

const StyledSnackbarContent = styled(Snack)(({ theme, ownerstate }) => {
  const { color, icon } = ownerstate;

  const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  };

  const primaryBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  };
  const infoBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  };
  const successBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  };
  const warningBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  };
  const dangerBoxShadow = {
    boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  };

  const colorStyles = {
    info: {
      backgroundColor: "#00d3ee",
      color: "#ffffff",
      ...infoBoxShadow
    },
    success: {
      backgroundColor: "#5cb860",
      color: "#ffffff",
      ...successBoxShadow
    },
    warning: {
      backgroundColor: "#ffa21a",
      color: "#ffffff",
      ...warningBoxShadow
    },
    danger: {
      backgroundColor: "#f55a4e",
      color: "#ffffff",
      ...dangerBoxShadow
    },
    primary: {
      backgroundColor: "#af2cc5",
      color: "#ffffff",
      ...primaryBoxShadow
    }
  };

  return {
    ...defaultFont,
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)",
    ...(color && colorStyles[color]),
    '& .message': {
      padding: "0",
      display: "block",
      maxWidth: "89%",
      ...(icon !== undefined && {
        paddingLeft: "50px",
        display: "block"
      })
    },
    '& .iconButton': {
      width: "24px",
      height: "24px",
      padding: "0px"
    },
    '& .close': {
      width: "11px",
      height: "11px"
    },
    '& .icon': {
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px",
      width: "30px",
      height: "30px"
    }
  };
});

function SnackbarContent({ message, color, close, icon, ...props }) {
  var action = [];
  const ownerState = { color, icon };
  
  if (close !== undefined) {
    action = [
      <IconButton
        className="iconButton"
        key="close"
        aria-label="Close"
        color="inherit"
        size="large">
        <Close className="close" />
      </IconButton>
    ];
  }
  
  return (
    <StyledSnackbarContent
      ownerState={ownerState}
      message={
        <div>
          {icon !== undefined ? <props.icon className="icon" /> : null}
          <span className="message">{message}</span>
        </div>
      }
      action={action}
    />
  );
}

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.func
};

export default SnackbarContent;
