import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const dangerColor = "#f44336";

const StyledDanger = styled('div')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  color: dangerColor
});

function Danger({ children }) {
  return (
    <StyledDanger>
      {children}
    </StyledDanger>
  );
}

Danger.propTypes = {
  children: PropTypes.node
};

export default Danger;
