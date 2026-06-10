import React from 'react';
import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const headerColorMap = {
    warning: '#ff9800',
    primary: undefined, // будет использовать theme.palette.text.primary
    secondary: undefined, // будет использовать theme.palette.text.secondary
    danger: '#f44336',
    success: '#4caf50',
    info: '#00acc1',
    rose: '#e91e63',
    gray: '#999999'
};

const StyledTable = styled(MuiTable, {
    shouldForwardProp: (prop) => prop !== 'ownerState'
})(({ theme, ownerState }) => {
    const { tableHeaderColor } = ownerState;
    const headerColor = tableHeaderColor
        ? (headerColorMap[tableHeaderColor] ?? theme.palette.text.primary)
        : undefined;

    return {
        marginBottom: 0,
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        borderSpacing: 0,
        borderCollapse: 'collapse',
        borderTop: `1px solid ${theme.palette.divider}`,
        '& .MuiTableCell-head': {
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightLight,
            lineHeight: '1.5em',
            fontSize: '1em',
            color: headerColor ?? 'inherit'
        },
        '& .MuiTableCell-body': {
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightLight,
            lineHeight: '1.42857143',
            padding: '12px 8px',
            verticalAlign: 'initial',
            color: 'inherit'
        },
        ...(headerColor && {
            '& .MuiTableHead-root': {
                color: headerColor
            }
        })
    };
});

const StyledTableResponsive = styled('div')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
}));

function CustomTable({ tableHead, tableData, tableHeaderColor = 'gray' }) {
    const ownerState = { tableHeaderColor };

    return (
        <StyledTableResponsive>
            <StyledTable ownerState={ownerState}>
                {tableHead !== undefined ? (
                    <TableHead>
                        <TableRow>
                            {tableHead.map((prop, key) => (
                                <TableCell key={key}>{prop}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => (
                        <TableRow key={key}>
                            {prop.map((cell, idx) => (
                                <TableCell key={idx}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableResponsive>
    );
}

export default CustomTable;
