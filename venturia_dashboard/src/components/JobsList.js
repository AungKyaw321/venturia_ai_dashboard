import React from "react";
import { Box, Button, Typography, TextField, Paper } from "@mui/material";

const jobs = ["Job Title 1", "Job Title 2", "Job Title 3"];

function JobsList() {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f7f7f7",
        height: "100vh",
        width: "350px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Threads</Typography>
        <Button variant="contained" color="success">
          New Job
        </Button>
      </Box>
      <TextField fullWidth margin="normal" placeholder="Search" />
      <Typography variant="h6">Current Jobs</Typography>
      {jobs.map((job, index) => (
        <Paper
          key={index}
          sx={{
            margin: "10px 0",
            padding: "10px",
            backgroundColor: index % 2 === 0 ? "#D8BFD8" : "#FFFACD",
          }}
        >
          <Typography>{job}</Typography>
          <Typography variant="body2" color="textSecondary">
            20 min ago
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default JobsList;
