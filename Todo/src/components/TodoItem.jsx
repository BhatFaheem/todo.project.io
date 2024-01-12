// TodoItem Code
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
function TodoItem({ todo, editTodo, deleteTodo, toggleTodo }) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const handleEditText = (e) => {
    setEditText(e.target.value);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.length > 0) {
      editTodo(todo.id, editText);
      setEditText("");
      setEdit(false);
    }
  };
  return (
    <ListItem>
      <Checkbox
        checked={todo.isComplete}
        onChange={() => toggleTodo(todo.id)}
      />
      {edit ? (
        <>
          <TextField
            value={editText}
            onChange={handleEditText}
            fullWidth
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditSubmit}
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <ListItemText primary={todo.text} />
          <IconButton onClick={() => setEdit(true)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
