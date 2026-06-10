import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledCardIcon = styled('div', {
    shouldForwardProp: (prop) => prop !== 'ownerState'
})(({ theme, ownerState }) => {
    const { color } = ownerState;

    const warningCardHeader = {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow:
            '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)'
    };
    const successCardHeader = {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow:
            '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)'
    };
    const dangerCardHeader = {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow:
            '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)'
    };
    const infoCardHeader = {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow:
            '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)'
    };
    const primaryCardHeader = {
        background: 'linear-gradient(60deg, #0d47a1, #fff)',
        boxShadow:
            '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)'
    };
    const roseCardHeader = {
        background: 'linear-gradient(60deg, #ec407a, #d81b60)',
        boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)'
    };

    const colorStyles = {
        warning: warningCardHeader,
        success: successCardHeader,
        danger: dangerCardHeader,
        info: infoCardHeader,
        primary: primaryCardHeader,
        rose: roseCardHeader
    };

    return {
        '& .cardIcon': {
            ...(color &&
                colorStyles[color] && {
                    borderRadius: '3px',
                    backgroundColor: '#999',
                    padding: '15px',
                    marginTop: '-20px',
                    marginRight: '15px',
                    float: 'left',
                    ...colorStyles[color]
                })
        }
    };
});

function CardIcon({ children, color, className, ...rest }) {
    const ownerState = { color };

    const cardIconClasses = classNames({
        [className]: className !== undefined
    });

    return (
        <StyledCardIcon className={cardIconClasses} ownerState={ownerState} {...rest}>
            <div className="cardIcon">{children}</div>
        </StyledCardIcon>
    );
}

CardIcon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'rose'])
};

export default CardIcon;
