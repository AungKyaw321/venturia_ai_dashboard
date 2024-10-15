import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Settings() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      overflow="hidden"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Settings
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 72px)" // Subtract the header height
        sx={{ backgroundColor: "#f5f5f5" }} // Light background for the page
      >
        <Box
          sx={{
            width: "400px", // Set width for the form box
            padding: "40px",
            backgroundColor: "#fff",
            borderRadius: "10px", // Rounded corners
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for elevation
            textAlign: "center", // Center text in the box
          }}
        >
          <Avatar
            sx={{ width: 100, height: 100, margin: "0 auto" }}
            src="profile-image.jpg"
            alt="User"
          />
          <Button sx={{ marginTop: "10px" }}>Change</Button>

          <Box mt={4}>
            <Typography align="left" fontWeight="bold" mb={1}>
              Name
            </Typography>
            <TextField
              value="Emilee Simchenko"
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: true }}
              sx={{ mb: 3 }}
            />

            <Typography align="left" fontWeight="bold" mb={1}>
              Default Language
            </Typography>
            <TextField
              value="English"
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: true }}
              sx={{ mb: 3 }}
            />

            <Typography align="left" fontWeight="bold" mb={1}>
              Default Resume
            </Typography>
            <TextField
              value="Resume 1"
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: true }}
              sx={{ mb: 4 }}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#C8FACC",
              color: "black",
              fontWeight: "bold",
              borderRadius: "25px", // Rounded button
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "#A8E4A0",
              },
            }}
          >
            Update Profile
          </Button>
          <Button fullWidth sx={{ color: "#000" }}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Settings;
