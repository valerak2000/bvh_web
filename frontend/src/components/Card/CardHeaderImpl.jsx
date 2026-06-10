import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import MuiCardHeader from '@mui/material/CardHeader';

function CardHeaderImpl(props) {
    const {
        title,
        titleTypographyProps: titleTypographyPropsProp,
        subheader,
        subheaderTypographyProps: subheaderTypographyPropsProp,
        sx: sxProp,
        ...other
    } = props;
    const theme = useTheme();
    const card = theme?.app?.card || {};

    const titleTypographyProps = titleTypographyPropsProp ?? card.titleTypography;
    const subheaderTypographyProps = subheaderTypographyPropsProp ?? card.subheaderTypography;
    const sx = sxProp ?? card.title;

    return (
        <MuiCardHeader
            title={title}
            titleTypographyProps={titleTypographyProps}
            subheader={subheader}
            subheaderTypographyProps={subheaderTypographyProps}
            sx={sx}
            {...other}
        />
    );
}

CardHeaderImpl.propTypes = {
    //title: PropTypes.string.isRequired,
};

export default CardHeaderImpl;
