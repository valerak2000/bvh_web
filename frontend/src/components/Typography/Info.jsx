import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const infoColor = "#00acc1";

const StyledInfo = styled('div')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  color: infoColor
});

function Info({ children }) {
  return (
    <StyledInfo>
      {children}
    </StyledInfo>
  );
}

Info.propTypes = {
  children: PropTypes.node
};

export default Info;
