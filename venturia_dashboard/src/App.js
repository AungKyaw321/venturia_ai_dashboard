import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MyTasks from "./pages/MyTasks";
import Settings from "./pages/Settings";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Box display="flex" height="100vh" width="100vw" overflow="hidden">
        <Sidebar />

        <Box sx={{ flexGrow: 1, width: "100%", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<MyTasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
