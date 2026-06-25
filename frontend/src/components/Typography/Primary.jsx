import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const primaryColor = "#9c27b0";

const StyledPrimary = styled('div')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  color: primaryColor
});

function Primary({ children }) {
  return (
    <StyledPrimary>
      {children}
    </StyledPrimary>
  );
}

Primary.propTypes = {
  children: PropTypes.node
};

export default Primary;
