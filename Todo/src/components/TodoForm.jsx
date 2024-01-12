// TodoForm Code
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      addTodo(todo);
      setTodo("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}></form>
      <Grid container spacing={2} alignItems="center">
        <Grid xs={2}></Grid>
        <Grid item xs={6}>
          <TextField
            label="Add Todo"
            variant="outlined"
            fullWidth
            value={todo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="Submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </>
  );
}

export default TodoForm;
