import React, { useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

const AdminPanel = () => {
  const initialUsers = [
    { id: 1, username: "john_doe", password: "johns_password" },
    { id: 2, username: "jane_smith", password: "janes_password" },
    { id: 3, username: "bob_jackson", password: "bobs_password" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const addUser = () => {
    // Generate a new id based on the current number of users
    const newId = users.length + 1;
    const newUser = { ...currentUser, id: newId };
    setUsers([...users, newUser]);
    setCurrentUser({ username: "", password: "" });
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} style={{ marginTop: -150 }}>
        <Paper style={{ padding: 20 }}>
          <h2>User Management</h2>
          <TextField
            label="Username"
            name="username"
            value={currentUser.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={currentUser.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addUser}
            fullWidth
          >
            Add User
          </Button>
          <TableContainer component={Paper} style={{ marginTop: 30 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
