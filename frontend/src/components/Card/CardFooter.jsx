import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const StyledCardFooter = styled('div')(({ theme, ownerstate }) => {
  const { plain, profile, stats, chart, className } = ownerstate;

  return {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0",
    ...(profile && {
      marginTop: "-15px"
    }),
    ...(plain && {
      paddingLeft: "5px",
      paddingRight: "5px",
      backgroundColor: "transparent"
    }),
    ...(stats && {
      borderTop: "1px solid #eee",
      marginTop: "20px",
      "& svg": {
        position: "relative",
        top: "4px",
        marginRight: "3px",
        marginLeft: "3px",
        width: "16px",
        height: "16px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "16px",
        position: "relative",
        top: "4px",
        marginRight: "3px",
        marginLeft: "3px"
      }
    }),
    ...(chart && {
      borderTop: "1px solid #eee"
    })
  };
});

function CardFooter({ children, plain, profile, stats, chart, className, ...rest }) {
  const ownerState = { plain, profile, stats, chart, className };
  
  const cardFooterClasses = classNames({
    [className]: className !== undefined
  });
  
  return (
    <StyledCardFooter className={cardFooterClasses} ownerState={ownerState} {...rest}>
      {children}
    </StyledCardFooter>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool
};

export default CardFooter;
