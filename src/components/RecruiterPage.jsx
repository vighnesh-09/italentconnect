import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  AppBar,    
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem as DropdownItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Dashboard,
  ArrowDropDown,
  Menu as MenuIcon,
  Work,
  Visibility,
  Notifications,
  Business,
} from '@mui/icons-material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const DashboardPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Dropdown state management
  const [jobAnchorEl, setJobAnchorEl] = useState(null);
  const [candidatesAnchorEl, setCandidatesAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Employer count state
  const [employerCount, setEmployerCount] = useState(0);
  const [openingsCount, setOpeningsCount] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    if (!token || userType !== 'recruiter') {
      navigate('/login'); // Unauthorized users ko login pe bhejo
    }
  }, [navigate]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(
          'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/'
        );
        setAppliedJobs(response.data.length);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };

    fetchAppliedJobs();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          'https://itc-backend-241149078260.us-central1.run.app/api/jobs/all'
        );
        setTotalJobs(response.data.length); // Total jobs count
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Fetch employer count on component load
  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get(
          'https://itc-backend-241149078260.us-central1.run.app/api/employer/all-jobs'
        );
        setEmployerCount(response.data.length); // Total employers count
      } catch (error) {
        console.log('Error fetching employers:', error);
      }
    };

    fetchEmployers();
  }, []);

  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const response = await axios.get(
          'https://itc-backend-241149078260.us-central1.run.app/api/jobs/openings-count'
        );
        setOpeningsCount(response.data.openings); // ✅ Only active jobs count
      } catch (error) {
        console.log('Error fetching job openings:', error);
      }
    };

    fetchJobOpenings();
  }, []);

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleDashboardClick = () => {
    navigate('/recruiter');
  };

  const handleApplicantsIconClick = () => {
    navigate('/employerUpdate');
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      <RecruiterDashNav />

      {/* Cards Section */}
      <Grid container spacing={3} p={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Current Openings</Typography>
              <Typography variant="h4">{openingsCount}</Typography>
              <Typography variant="body2">Total Jobs / Non-Active</Typography>
              <IconButton>
                <Work />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Employers Details</Typography>
              <Typography variant="h4">{employerCount}</Typography>
              <Typography variant="body2">Total Employers</Typography>
              <IconButton onClick={handleApplicantsIconClick}>
                <Visibility />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Manage Recruiter </Typography>
              <Typography variant="h4">{appliedJobs}</Typography>
              <Typography variant="body2">Upcoming / Past</Typography>
              <IconButton onClick={() => navigate('/recruiter-table')}>
                <Notifications />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Job Posted </Typography>
              <Typography variant="h4">{totalJobs}</Typography>
              <Typography variant="body2">Active/Close</Typography>
              <IconButton onClick={() => navigate('/all-jobs')}>
                <Business />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
