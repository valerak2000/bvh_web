import React from "react";
import PropTypes from "prop-types";
import { useTheme, styled } from '@mui/material/styles';
import MuiTable from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

const StyledTable = styled(MuiTable)(({ theme, ownerstate }) => {
  const { tableHeaderColor } = ownerstate;
  
  const warningColor = "#ff9800";
  const primaryColor = "#9c27b0";
  const dangerColor = "#f44336";
  const successColor = "#4caf50";
  const infoColor = "#00acc1";
  const roseColor = "#e91e63";
  const grayColor = "#999999";

  const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  };

  const colorStyles = {
    warningTableHeader: { color: warningColor },
    primaryTableHeader: { color: theme.palette.text.primary },
    secondaryTableHeader: { color: theme.palette.text.secondary },
    dangerTableHeader: { color: dangerColor },
    successTableHeader: { color: successColor },
    infoTableHeader: { color: infoColor },
    roseTableHeader: { color: roseColor },
    grayTableHeader: { color: grayColor }
  };

  return {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
    borderTop: `1px solid ${theme.palette.divider}`,
    '& .tableHeadCell': {
      color: 'inherit',
      ...defaultFont,
      fontSize: '1em'
    },
    '& .tableCell': {
      ...defaultFont,
      lineHeight: '1.42857143',
      padding: '12px 8px',
      verticalAlign: 'initial',
      color: 'inherit',
      '& body': {
        color: theme.palette.text.secondary,
      },
    },
    ...(tableHeaderColor && colorStyles[`${tableHeaderColor}TableHeader`] && {
      '& thead': colorStyles[`${tableHeaderColor}TableHeader`]
    })
  };
});

const StyledTableResponsive = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  overflowX: 'auto'
}));

function CustomTable({ tableHead, tableData, tableHeaderColor }) {
  const ownerState = { tableHeaderColor };
  
  return (
    <StyledTableResponsive>
      <StyledTable ownerState={ownerState}>
        {tableHead !== undefined ? (
          <TableHead>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className="tableCell tableHeadCell"
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className="tableCell" key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </StyledTableResponsive>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "secondary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

const TableWithTheme = (props) => {
  const theme = useTheme();
  return <CustomTable {...props} theme={theme} />;
};

export default TableWithTheme;
