import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledCard = styled('div', {
    shouldForwardProp: (prop) => prop !== 'ownerState'
})(({ theme, ownerState }) => {
    const { plain, profile, chart } = ownerState;

    return {
        border: '0',
        marginBottom: '30px',
        marginTop: '30px',
        borderRadius: '6px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
        width: '100%',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        fontSize: '.875rem',
        ...(plain && {
            background: 'transparent',
            boxShadow: 'none'
        }),
        ...(profile && {
            marginTop: '30px',
            textAlign: 'center'
        }),
        ...(chart && {
            '& p': {
                marginTop: '0px',
                paddingTop: '0px'
            }
        })
    };
});

function Card({ children, plain, profile, chart, className, ...rest }) {
    const ownerState = { plain, profile, chart };

    const cardClasses = classNames({
        [className]: className !== undefined
    });

    return (
        <StyledCard className={cardClasses} ownerState={ownerState} {...rest}>
            {children}
        </StyledCard>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    chart: PropTypes.bool
};

export default Card;
