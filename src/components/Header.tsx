import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Function to handle smooth scroll to a specific section
const handleScroll = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EDUFINITE - Online English Tutor
        </Typography>
        <Button color="inherit" onClick={() => handleScroll("about")}>
          About
        </Button>
        <Button color="inherit" onClick={() => handleScroll("services")}>
          Services
        </Button>
        <Button color="inherit" onClick={() => handleScroll("testimonials")}>
          Testimonials
        </Button>
        <Button color="inherit" onClick={() => handleScroll("contact")}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
