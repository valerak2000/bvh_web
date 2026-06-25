import React from "react";
import Grid from "@mui/material/Grid";

function GridItem({ children, ...rest }) {
  return (
    <Grid 
      item 
      {...rest}
      sx={{
        height: '100%',
      }}
    >
      {children}
    </Grid>
  );
}

export default GridItem;
