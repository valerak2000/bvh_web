import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

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

function FileLink({ href = 'http://', label = 'label', style: styleProp, theme }) {
    const { buttonLink } = theme;
    const styles = styleProp == null ? {} : { ...styleProp, display: 'flex' };

    const partsExt = href.split('/').pop().split('.');
    const ext = partsExt.length > 1 ? partsExt.pop() : '';
    let iconExt = null;
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
        <div style={styles}>
            <IconButton
                aria-label={label}
                href={href}
                target="_blank"
                aria-selected={false}
                centerRipple={false}
                disableRipple={true}
                sx={buttonLink}
                size="large"
            >
                <img src={iconExt} style={buttonLink.iconFile} alt={label} />
            </IconButton>
            <Typography
                align="left"
                color="textSecondary"
                variant="body1"
                sx={buttonLink.labelFile}
            >
                {label}
            </Typography>
        </div>
    );
}

FileLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    theme: PropTypes.object.isRequired
};

const FileLinkWithTheme = (props) => {
    const theme = useTheme();
    return <FileLink {...props} theme={theme} />;
};

export default FileLinkWithTheme;
