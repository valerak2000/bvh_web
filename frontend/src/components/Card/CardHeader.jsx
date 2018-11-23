import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CardMedia from '@material-ui/core/CardMedia';

function CardHeader({ ...props }) {
    const { classes, title, ...rest } = props;
    const { сard } = props.theme.app;

    return (
        <CardHeader
            title = { title }
            titleTypographyProps = { сard.titleTypography }
            style = { сard.title }
            { ...rest }
        />
    );
}

CardHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
};
  
export default withStyles(null, { withTheme: true })(CardHeader);
