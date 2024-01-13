import { Grid, IconButton, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import React from "react";

function SearchBar() {
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        p={2}
        justifyContent={"center"}
      >
        <Grid item xs={10}>
          <TextField label="Search Todo" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <Search />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBar;
