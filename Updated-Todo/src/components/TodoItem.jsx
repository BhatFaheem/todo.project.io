import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import React, { useState } from "react";
function TodoItem({ todo, editTodo, deleteTodo, toggleTodo }) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditText = (e) => {
    setEditText(e.target.value);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.length > 0) {
      editTodo(todo.id, editText);
      setEdit(false);
      setEditText("");
    }
  };
  return (
    <>
      <ListItem>
        <Checkbox
          checked={todo.isComplete}
          onChange={() => toggleTodo(todo.id)}
        />
        {edit ? (
          <>
            <TextField
              value={editText}
              fullWidth
              onChange={handleEditText}
              variant="outlined"
            />
            <IconButton
              variant="contained"
              color="primary"
              onClick={handleEditSubmit}
            >
              <SaveIcon />
            </IconButton>
          </>
        ) : (
          <>
            <TextField
              variant="outlined"
              value={todo.text}
              fullWidth
              disabled={todo.isComplete ? true : false}
            />
            <IconButton onClick={() => setEdit(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </ListItem>
    </>
  );
}

export default TodoItem;
