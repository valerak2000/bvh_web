import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const successColor = "#4caf50";

const StyledSuccess = styled('div')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  color: successColor
});

function Success({ children }) {
  return (
    <StyledSuccess>
      {children}
    </StyledSuccess>
  );
}

Success.propTypes = {
  children: PropTypes.node
};

export default Success;
