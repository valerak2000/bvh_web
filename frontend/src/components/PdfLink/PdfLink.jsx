import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const pathIconPdf = '/static/images/pdf-icon.png';
const styles = theme => ({
});

class PdfLink extends Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    static defaultProps = {
        href: 'http://',
        label: 'label',
    };

    render() {
        const { classes } = this.props;
        const { href, label } = this.props;
        const { buttonLink } = this.props.theme;
        var styles = typeof this.props.style === 'undefined' || this.props.style == null ? {} : this.props.style;
        styles = Object.assign(styles, { display: 'flex' });

        return (
            <div
                style = {{ ...styles }}
            >
                <IconButton
                    aria-label = { label }
                    href = { href }
                    target = '_blank'
                    aria-selected = { false }
                    centerRipple = { false }
                    disableRipple = { true }
                    style = { buttonLink }
                >
                    <img
                        src = { pathIconPdf }
                        style = { buttonLink.iconPdf }
                    />
                </IconButton>
                <Typography
                    align = 'left'
                    color = 'textSecondary'
                    variant = 'body1'
                    style = { buttonLink.labelPdf }
                >
                    { label }
                </Typography>
            </div>
        );
    }
}
/*
            <IconButton
            aria-label = 'Войти'
            onClick = { props.onClick }
            disableTouchRipple = { true }
            style = { props.style.button }
        >
            Войти    
            <FontAwesomeIcon
                icon = { faSignInAlt }
                style = { props.style.button.icon }
            />
        </IconButton>
            <IconButton
                href = { href } 
                target = "_blank"
                aria-label = { label }
                label = { label }
                labelStyle = { labelPdf }
                icon = {    
                    <img
                        src = { pathIconPdf }
                        style = { iconPdf }
                    />
                }
            />
*/

export default withStyles(styles, { name: 'muiPdfLink', flip: false, withTheme: true })(PdfLink);
