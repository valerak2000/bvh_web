import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withTheme';
import CardHeader from '@material-ui/core/CardHeader';

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
        />
    );
}

CardHeaderImpl.propTypes = {
    //title: PropTypes.string.isRequired,
};

export default withStyles(null, { name: 'muiCardHeaderImpl', flip: false, withTheme: true })(CardHeaderImpl);
export { CardHeaderImpl as CardHeader };

/*
*/