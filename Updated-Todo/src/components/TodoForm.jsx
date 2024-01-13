// Todo Form JSX
import { Button, CssBaseline, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      // console.log("Yohooooooo");
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        alignItems="center"
        p={2}
        justifyContent={"center"}
      >
        {/* <Grid item xs={2}></Grid> */}
        <Grid item xs={6}>
          <TextField
            label="Add Todo"
            variant="filled"
            fullWidth
            value={todo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="Submit"
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            Add
          </Button>
        </Grid>
        {/* <Grid item xs={2}></Grid> */}
      </Grid>
    </>
  );
}

export default TodoForm;
