import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';

const iconPdf = '/static/images/pdf-icon.png';

class PdfLink extends Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
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

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

PdfLink.muiName = 'PdfLink';

export default muiThemeable()(connect(mapStateToProps)(PdfLink));
