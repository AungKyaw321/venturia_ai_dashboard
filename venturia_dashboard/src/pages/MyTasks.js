import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function MyTasks() {
  const tasks = [
    {
      name: "Job 1",
      position: "Software Dev",
      company: "XYZ",
      industry: "Marketing",
      deadline: "08 Jan 2019",
      stage: "Interview Stage",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          My Tasks
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#f7f7f7",
          height: "100%",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell>Application Deadline</TableCell>
                <TableCell align="right">Stage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>{task.position}</TableCell>
                  <TableCell>{task.company}</TableCell>
                  <TableCell>{task.industry}</TableCell>
                  <TableCell>{task.deadline}</TableCell>
                  <TableCell align="right">
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleMenuClick}
                      endIcon={<MoreVertIcon />}
                    >
                      {task.stage}
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default MyTasks;
