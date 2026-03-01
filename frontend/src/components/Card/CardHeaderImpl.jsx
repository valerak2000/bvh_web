import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

function CardHeaderImpl(props) {
    const {
        title,
        titleTypographyProps: titleTypographyPropsProp,
        subheader,
        subheaderTypographyProps: subheaderTypographyPropsProp,
        style: styleProp,
        ...other
    } = props;
    const { card } = props.theme.app;

    let titleTypographyProps = titleTypographyPropsProp;
    if (titleTypographyProps === undefined || titleTypographyProps === null) {
        titleTypographyProps = card.titleTypography;
    }

    let subheaderTypographyProps = subheaderTypographyPropsProp;
    if (subheaderTypographyProps === undefined || subheaderTypographyProps === null) {
        subheaderTypographyProps = card.subheaderTypography;
    }

    let style = styleProp;
    if (style === undefined || style === null) {
        style = card.title;
    }

    return (
        <CardHeader
            title = { title }
            titleTypographyProps = { titleTypographyProps }
            subheader = { subheader }
            subheaderTypographyProps = { subheaderTypographyProps }
            style = { style }
            {...other}
        />
    );
}

CardHeaderImpl.propTypes = {
    //title: PropTypes.string.isRequired,
};

const CardHeaderImplWithTheme = (props) => {
    const theme = useTheme();
    return <CardHeaderImpl {...props} theme={theme} />;
};

export default CardHeaderImplWithTheme;
export { CardHeaderImpl as CardHeader };
