// src/components/Header.tsx

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Function to handle smooth scroll to a specific section
const handleScroll = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar sx={{ flexDirection: "column", alignItems: "center" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#4caf50", flexGrow: 1, marginBottom: 1 }}
        >
          EDUFINITE - Online English Tutor
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Button
            color="inherit"
            onClick={() => handleScroll("about")}
            sx={{ color: "#4caf50" }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll("services")}
            sx={{ color: "#4caf50" }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll("testimonials")}
            sx={{ color: "#4caf50" }}
          >
            Testimonials
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll("contact")}
            sx={{ color: "#4caf50" }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
