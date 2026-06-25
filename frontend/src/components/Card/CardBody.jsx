import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledCardBody = styled('div', {
    shouldForwardProp: (prop) => prop !== 'ownerState'
})(({ theme, ownerState }) => {
    const { plain, profile } = ownerState;

    return {
        padding: '0.9375rem 20px',
        flex: '1 1 auto',
        WebkitBoxFlex: '1',
        position: 'relative',
        ...(plain && {
            paddingLeft: '5px',
            paddingRight: '5px'
        }),
        ...(profile && {
            marginTop: '15px'
        })
    };
});

function CardBody({ children, plain, profile, className, ...rest }) {
    const ownerState = { plain, profile };

    const cardBodyClasses = classNames({
        [className]: className !== undefined
    });

    return (
        <StyledCardBody className={cardBodyClasses} ownerState={ownerState} {...rest}>
            {children}
        </StyledCardBody>
    );
}

CardBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    plain: PropTypes.bool,
    profile: PropTypes.bool
};

export default CardBody;
