import React from "react";
import { Box, Avatar, Typography, TextField, Button } from "@mui/material";

function ChatSection() {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f7f7f7",
        height: "100vh",
        width: "100%",
      }}
    >
      <Typography variant="h6">Job Title that user will tell us</Typography>

      <Box mt={2}>
        <Box display="flex" mb={2}>
          <Avatar alt="Venturia AI" src="venturia-avatar.jpg" />
          <Box ml={2}>
            <Typography variant="body2">Venturia AI</Typography>
            <Typography variant="body2" color="textSecondary">
              Yesterday at 12:37pm
            </Typography>
            <Typography>
              Hello, Please select your language you would like to interview
              with!
            </Typography>
          </Box>
        </Box>

        <Box display="flex" mb={2}>
          <Avatar alt="User" src="user-avatar.jpg" />
          <Box ml={2}>
            <Typography variant="body2">Username</Typography>
            <Typography variant="body2" color="textSecondary">
              Yesterday at 12:37pm
            </Typography>
          </Box>
        </Box>

        <Box display="flex" mt={4} alignItems="center">
          <Avatar alt="User" src="user-avatar.jpg" />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Message"
            sx={{ ml: 2 }}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatSection;
