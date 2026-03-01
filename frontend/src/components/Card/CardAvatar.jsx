import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const StyledCardAvatar = styled('div')(({ theme, ownerstate }) => {
  const { profile, plain, className } = ownerstate;

  return {
    ...(profile && {
      "& img": {
        width: "100%",
        height: "auto"
      }
    }),
    ...(profile && {
      maxWidth: "130px",
      maxHeight: "130px",
      margin: "-50px auto 0",
      borderRadius: "50%",
      overflow: "hidden",
      padding: "0",
      boxShadow: "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      ...(plain && {
        marginTop: "0"
      })
    })
  };
});

function CardAvatar({ children, profile, plain, className, ...rest }) {
  const ownerState = { profile, plain, className };
  
  const cardAvatarClasses = classNames({
    [className]: className !== undefined
  });
  
  return (
    <StyledCardAvatar className={cardAvatarClasses} ownerState={ownerState} {...rest}>
      {children}
    </StyledCardAvatar>
  );
}

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};

export default CardAvatar;
