import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const warningColor = "#ff9800";

const StyledWarning = styled('div')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  color: warningColor
});

function Warning({ children }) {
  return (
    <StyledWarning>
      {children}
    </StyledWarning>
  );
}

Warning.propTypes = {
  children: PropTypes.node
};

export default Warning;
