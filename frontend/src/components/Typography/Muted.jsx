import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const StyledMuted = styled('div')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  color: "#777"
});

function Muted({ children }) {
  return (
    <StyledMuted>
      {children}
    </StyledMuted>
  );
}

Muted.propTypes = {
  children: PropTypes.node
};

export default Muted;
