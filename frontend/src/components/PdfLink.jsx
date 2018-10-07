import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import FlatButton from 'material-ui/FlatButton';

const iconPdf = '/static/images/pdf-icon.png';

class PdfLink extends Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
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

        return (
            <FlatButton
                href = { href } 
                target = "_blank"
                label = { label }
                labelStyle = { this.props.muiTheme.labelPdf }
                icon = {    
                    <img
                        src = { iconPdf }
                        style = { this.props.muiTheme.iconPdf }
                    />
                }
            />
        );
    }
}
/*
*/

PdfLink.muiName = 'PdfLink';

export default withTheme()(PdfLink);
