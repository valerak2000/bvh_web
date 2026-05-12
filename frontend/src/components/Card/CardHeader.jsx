import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const cardHeaderStyle = {
    cardHeader: {
        padding: "0.75rem 1.25rem",
        marginBottom: "0",
        borderBottom: "none",
        background: "transparent",
        zIndex: "3 !important",
        "&:first-child": {
            borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
        }
    }
};

const StyledCardHeader = styled('div')(({ theme, ownerstate }) => {
    const { color, plain, stats, icon, className } = ownerstate;

    const warningCardHeader = {
        background: "linear-gradient(60deg, #ffa726, #fb8c00)",
        boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
    };
    const successCardHeader = {
        background: "linear-gradient(60deg, #66bb6a, #43a047)",
        boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
    };
    const dangerCardHeader = {
        background: "linear-gradient(60deg, #ef5350, #e53935)",
        boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
    };
    const infoCardHeader = {
        background: "linear-gradient(60deg, #26c6da, #00acc1)",
        boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    };
    const primaryCardHeader = {
        background: "linear-gradient(60deg, #0d47a1, #fff)",
        boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    };
    const roseCardHeader = {
        background: "linear-gradient(60deg, #ec407a, #d81b60)",
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
    };

    const colorStyles = {
        warning: warningCardHeader,
        success: successCardHeader,
        danger: dangerCardHeader,
        info: infoCardHeader,
        primary: primaryCardHeader,
        rose: roseCardHeader,
        secondary: {}
    };

    return {
        ...cardHeaderStyle.cardHeader,
        ...(color && colorStyles[color] && {
            margin: "0 15px",
            padding: "0",
            position: "relative",
            color: "#FFFFFF",
            ...colorStyles[color]
        }),
        ...(plain && {
            marginLeft: "0px !important",
            marginRight: "0px !important"
        }),
        ...(stats && {
            "& svg": {
                fontSize: "36px",
                lineHeight: "56px",
                textAlign: "center",
                width: "36px",
                height: "36px",
                margin: "10px 10px 4px"
            },
            "& i,& .material-icons": {
                fontSize: "36px",
                lineHeight: "56px",
                width: "56px",
                height: "56px",
                textAlign: "center",
                overflow: "unset",
                marginBottom: "1px"
            },
            "& h1,& h2,& h3,& h4,& h5,& h6": {
                margin: "0 !important"
            }
        }),
        ...(icon && {
            "& i,& .material-icons": {
                width: "33px",
                height: "33px",
                textAlign: "center",
                lineHeight: "33px"
            },
            "& svg": {
                width: "24px",
                height: "24px",
                textAlign: "center",
                lineHeight: "33px",
                margin: "5px 4px 0px"
            }
        })
    };
});

function CardHeader({ children, color, plain, stats, icon, className, ...rest }) {
    const ownerState = { color, plain, stats, icon, className };

    const cardHeaderClasses = classNames({
        [className]: className !== undefined
    });

    return (
        <StyledCardHeader className={cardHeaderClasses} ownerState={ownerState} {...rest}>
            {children}
        </StyledCardHeader>
    );
}

CardHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose",
        "secondary"
    ]),
    plain: PropTypes.bool,
    stats: PropTypes.bool,
    icon: PropTypes.bool
};

export default CardHeader;
