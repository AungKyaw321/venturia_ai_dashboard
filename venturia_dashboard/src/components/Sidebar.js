import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: "#000",
        color: "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* User Info */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src="profile-image.jpg"
          alt="User"
          sx={{ width: 56, height: 56 }}
        />
        <Box ml={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Emilee Simchenko
          </Typography>
          <Typography variant="body2">Product Owner</Typography>
        </Box>
      </Box>

      {/* Stats */}
      <Box display="flex" justifyContent="space-between" my={2}>
        <Box textAlign="center" sx={{ mr: 2 }}>
          {" "}
          {/* Adding margin-right here */}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            372
          </Typography>
          <Typography variant="body2">Completed Interviews</Typography>
        </Box>
        <Box textAlign="center" sx={{ ml: 2 }}>
          {" "}
          {/* Adding margin-left here */}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            11
          </Typography>
          <Typography variant="body2">Current Interviews</Typography>
        </Box>
      </Box>

      {/* Navigation List */}
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <HomeIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem component={Link} to="/tasks">
          <ListItemIcon>
            <WorkIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="My Tasks" />
        </ListItem>

        <ListItem component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
