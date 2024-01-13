import Search from "@mui/icons-material/Search";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function SearchBar({ todos }) {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Filter todos based on the search text
    const matchingTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matchingTodos);
  };

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
          <TextField
            label="Search Todo"
            variant="filled"
            fullWidth
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <Search />
          </IconButton>
        </Grid>
      </Grid>
      {suggestions.length > 0 && (
        <Paper elevation={3} style={{ maxHeight: 200, overflowY: "auto" }}>
          <List>
            {suggestions.map((todo) => (
              <ListItem key={todo.id}>
                <ListItemText primary={todo.text} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
}

export default SearchBar;
