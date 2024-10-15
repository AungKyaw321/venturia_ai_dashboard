import React from "react";
import JobsList from "../components/JobsList";
import ChatSection from "../components/ChatSection";
import { Box, Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Home() {
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
          Dashboard
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box display="flex" width="100%" height="100%" overflow="hidden">
        <Box
          sx={{
            flex: 1,
            borderRight: "1px solid #ddd",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <JobsList />
        </Box>
        <Box sx={{ flex: 2, padding: "20px", overflowY: "auto" }}>
          <ChatSection />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
