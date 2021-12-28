import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const fileIconPdf = '/static/images/pdf-icon.png';
const fileIconExcel = '/static/images/excel-xls-icon.png';
const fileIconWord = '/static/images/word-doc-icon.png';
const fileIconTxt = '/static/images/txt-icon.png';
const fileIconZip = '/static/images/zip-icon.png';
const fileIconRar = '/static/images/rar-icon.png';
const fileIconCsv = '/static/images/csv-icon.png';
const fileIconAvi = '/static/images/avi-icon.png';
const fileIconJpg = '/static/images/jpg-icon.png';
const fileIconPng = '/static/images/png-icon.png';

const styles = theme => ({
});

class FileLink extends Component {
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

        const partsExt = href.split('/').pop().split('.');
        const ext = partsExt.length > 1 ? partsExt.pop() : '';
        var iconExt = null;
        switch (ext.toUpperCase()) {
            case 'JPG':
                iconExt = fileIconJpg;
                break;
            case 'PNG':
                iconExt = fileIconPng;
                break;
            case 'AVI':
            case 'MP4':
            case 'MOV':
                iconExt = fileIconAvi;
                break;
            case 'TXT':
                iconExt = fileIconTxt;
                break;
            case 'PDF':
                iconExt = fileIconPdf;
                break;
            case 'ZIP':
                iconExt = fileIconZip;
                break;
            case 'RAR':
                iconExt = fileIconRar;
                break;
            case '7Z':
                iconExt = fileIconZip;
                break;
            case 'CSV':
                iconExt = fileIconCsv;
                break;
            case 'DOC':
            case 'DOCX':
                iconExt = fileIconWord;
                break;
            case 'XLS':
            case 'XLSX':
                iconExt = fileIconExcel;
                break;
        }

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
                        src = { iconExt }
                        style = { buttonLink.iconFile }
                    />
                </IconButton>
                <Typography
                    align = 'left'
                    color = 'textSecondary'
                    variant = 'body1'
                    style = { buttonLink.labelFile }
                >
                    { label }
                </Typography>
            </div>
        );
    }
}
/*
*/

export default withStyles(styles, { name: 'muiFileLink', flip: false, withTheme: true })(FileLink);
