import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem as DropdownItem,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Dashboard,
  ArrowDropDown as ArrowDropDownIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const RecruiterDashNav = () => {
  const navigate = useNavigate();
  const [jobAnchorEl, setJobAnchorEl] = useState(null);
  const [candidatesAnchorEl, setCandidatesAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleDashboardClick = () => {
    navigate("/recruiter");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        <ListItem button onClick={handleDashboardClick}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate("/jobpost")}>
          <ListItemText primary="Add New Job" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Manage Job" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="New Application" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Manage Candidates" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Remove Account" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Dashboard Icon and Title */}
          <Dashboard sx={{ marginRight: 2, display: { xs: "none", md: "block" } }} />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: "pointer", display: { xs: "none", md: "block" } }}
            onClick={handleDashboardClick}
          >
            Recruiter Dashboard
          </Typography>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, setJobAnchorEl)}
              endIcon={<ArrowDropDownIcon />}
            >
              Jobs
            </Button>
            <Menu
              anchorEl={jobAnchorEl}
              open={Boolean(jobAnchorEl)}
              onClose={() => handleMenuClose(setJobAnchorEl)}
            >
              <DropdownItem onClick={() => navigate("/jobpost")}>
                Add New Job
              </DropdownItem>
              <DropdownItem onClick={() =>navigate("/manageJob")}>
                Manage Job
              </DropdownItem>
            </Menu>

            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, setCandidatesAnchorEl)}
              endIcon={<ArrowDropDownIcon />}
            >
              Candidates
            </Button>
            <Menu
              anchorEl={candidatesAnchorEl}
              open={Boolean(candidatesAnchorEl)}
              onClose={() => handleMenuClose(setCandidatesAnchorEl)}
            >
             
              <DropdownItem onClick={() =>navigate("/candidate-fetch")}>
                Manage Candidates
              </DropdownItem>
            </Menu>

             <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, setSettingsAnchorEl)}
              endIcon={<ArrowDropDownIcon />}
            >
              Recruiter 
            </Button>
            <Menu
              anchorEl={settingsAnchorEl}
              open={Boolean(settingsAnchorEl)}
              onClose={() => handleMenuClose(setSettingsAnchorEl)}
            >
              <DropdownItem onClick={() =>navigate("/register")}>
                Add One More Recruiter
              </DropdownItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
export default RecruiterDashNav;
