import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const pathIconPdf = '/static/images/pdf-icon.png';

class PdfLink extends Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        theme: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    static defaultProps = {
        href: 'http://',
        label: 'label',
    };

    state = {
    };
    
    render() {
        const { href, label } = this.props;
        const { buttonLink } = this.props.theme;

        return (
            <div
                style = {{ display: 'flex' }}
            >
                <IconButton
                    aria-label = { label }
                    href = { href }
                    target = "_blank"
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
                    variant = 'caption'
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

PdfLink.muiName = 'PdfLink';

export default withTheme()(PdfLink);
