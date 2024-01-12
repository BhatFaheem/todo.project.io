import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
function TodoForm({addTodo}) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
    if (todo.length > 0) {
      addTodo(todo);
      setTodo("");
    }
  };
  return (
    <Grid container spacing={2} alignItems="center" p={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={6}>
        <TextField label="Add Todo" variant="outlined" fullWidth value={todo} />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" onSubmit={handleSubmit}>
          Add
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default TodoForm;
