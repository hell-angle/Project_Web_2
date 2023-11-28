import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const AdminVerificationPage = () => {
  const navigate = useNavigate();
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered secret key matches the expected key
    if (secretKey === "yourSecretKey") {
      // If the key is correct, navigate to the admin panel or desired page
      navigate("/admin-panel"); // Change '/admin-panel' to your desired admin page
    } else {
      // If the key is incorrect, display an error message or handle it accordingly
      alert("Incorrect secret key. Please try again."); // Replace with your error handling logic
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper sx={{ padding: 4, maxWidth: 400 }}>
        <Typography variant="h5" align="center" mb={3}>
          Admin Verification
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              type="password"
              placeholder="Enter Secret Key"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
            <Button component={Link} to="/signin" variant="outlined" fullWidth>
              Go back to Sign In
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminVerificationPage;
