import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';

export default function RecruiterNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [recruiter, setRecruiter] = useState(null); // State to store user data
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get(
          'https://itc-backend-241149078260.us-central1.run.app/api/fetch/profile',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRecruiter(response.data); // Store user data
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  // Dropdown Open Handler
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Dropdown Close Handler
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    localStorage.removeItem('userType');
    window.location.href = '/login'; // Redirect to login page
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#132338',
          color: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
          zIndex: 1100,
          marginTop: '-7.5px',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', marginTop: 2 }}
          >
            <img
              src="24.png"
              alt="Logo"
              style={{ width: '200px', height: 'auto' }}
            />
          </Typography>

          {/* Icons Section */}
          {isMobile ? (
            <IconButton onClick={toggleMobileMenu} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', color: '#fff' }}
              >
                Call Us - +91 99045 01115
              </Typography>

              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
              >
                <NotificationsIcon />
              </IconButton>

              {/* Account Section with Dropdown */}
              <Box>
                <IconButton onClick={handleMenuOpen} color="inherit">
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{
                    '& .MuiPaper-root': {
                      borderRadius: '10px',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      minWidth: '250px',
                      padding: '10px',
                    },
                  }}
                >
                  {/* User Data Display */}
                  <Box sx={{ padding: '10px', textAlign: 'center' }}>
                    <Avatar sx={{ width: 56, height: 56, margin: '0 auto' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {recruiter?.name || 'Loading...'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {recruiter?.email || 'Loading...'}
                    </Typography>
                  </Box>
                  <Divider />
                  <MenuItem onClick={() => navigate('/profile')}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    My Profile
                  </MenuItem>

                  <MenuItem onClick={() => navigate('/change-password')}>
                    <ListItemIcon>
                      <LockIcon />
                    </ListItemIcon>
                    Change Password
                  </MenuItem>
                  {/* <MenuItem onClick={() => navigate("/change-email")}>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    Change Email
                  </MenuItem> */}
                  <Divider />
                  <MenuItem
                    onClick={handleLogout}
                    sx={{ color: 'red', fontWeight: 'bold' }}
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
