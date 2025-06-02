import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Container,
  useTheme,
  useMediaQuery,
  Typography,
  Collapse,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../assets/headerlogo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State management
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/service' },
    { label: 'Job Opening', path: '/open-job' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Contact Us', path: '/contactUs' },
  ];

  // Login options
  const loginOptions = [
    { label: 'Recruiter', path: '/login' },
    { label: 'Employer', path: '/employer-login' },
    { label: 'Candidate', path: '/candidate-register' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Add useEffect to prevent zooming on mobile
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventZoom, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  // Handlers
  const handleLoginClick = (event) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleLoginClose = (path) => {
    setLoginAnchorEl(null);
    if (path) navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileLoginToggle = () => {
    setMobileLoginOpen(!mobileLoginOpen);
  };

  // Mobile drawer content
  const drawer = (
    <Box sx={{
      width: '100%',
      height: '100%',
      bgcolor: '#192A56',
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, px: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
            sx={{
              py: 1.5,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              color: location.pathname === item.path ? '#F7C948' : 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}

        <ListItem
          onClick={handleMobileLoginToggle}
          sx={{
            py: 1.5,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            color: '#F7C948',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
          }}
        >
          <ListItemText
            primary="Login"
            primaryTypographyProps={{
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          />
          <KeyboardArrowDownIcon
            sx={{
              transform: mobileLoginOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s',
            }}
          />
        </ListItem>

        <Collapse in={mobileLoginOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {loginOptions.map((option) => (
              <ListItem
                key={option.label}
                onClick={() => {
                  navigate(option.path);
                  setMobileOpen(false);
                  setMobileLoginOpen(false);
                }}
                sx={{
                  pl: 4,
                  py: 1.5,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                <ListItemText
                  primary={option.label}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: scrolled ? 'rgba(25, 42, 86, 0.95)' : '#192A56',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          height: { xs: '70px', md: '80px' },
          px: { xs: 2, sm: 3, md: 0 }, // Add horizontal padding for mobile
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 0, sm: 2 }, // Adjust container padding
            height: '100%',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 1, sm: 2 }, // Add padding to toolbar
            }}
          >
            {/* Logo */}
            <Box
              onClick={() => navigate('/')}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                ml: { xs: 1, sm: 0 }, // Add margin for mobile
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: isMobile ? '35px' : '45px', // Slightly smaller on mobile
                  transition: 'height 0.3s ease-in-out',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { md: 2, lg: 3 },
              }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: location.pathname === item.path ? '#F7C948' : 'white',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -2,
                        left: '50%',
                        transform: location.pathname === item.path
                          ? 'translateX(-50%) scaleX(1)'
                          : 'translateX(-50%) scaleX(0)',
                        width: '100%',
                        height: '2px',
                        bgcolor: '#F7C948',
                        transition: 'transform 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                      fontSize: '1rem',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      textTransform: 'none',
                      px: 1,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}

                {/* Login Button */}
                <Button
                  variant="contained"
                  onClick={handleLoginClick}
                  sx={{
                    bgcolor: '#F7C948',
                    color: '#000',
                    textTransform: 'none',
                    px: 3,
                    py: 1,
                    borderRadius: '4px',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#e6b800',
                    },
                  }}
                >
                  Login
                </Button>

                {/* Login Menu */}
                <Menu
                  anchorEl={loginAnchorEl}
                  open={Boolean(loginAnchorEl)}
                  onClose={() => handleLoginClose()}
                  TransitionComponent={Fade}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: 180,
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  {loginOptions.map((option) => (
                    <MenuItem
                      key={option.label}
                      onClick={() => handleLoginClose(option.path)}
                      sx={{
                        py: 1.5,
                        px: 2,
                        '&:hover': {
                          bgcolor: 'rgba(247, 201, 72, 0.1)',
                        },
                      }}
                    >
                      <Typography sx={{
                        fontSize: '0.95rem',
                        fontWeight: 500,
                      }}>
                        {option.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: 'white',
                  mr: 1, // Add margin for mobile
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: '300px',
            boxSizing: 'border-box',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: '#192A56',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Box sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            position: 'sticky',
            top: 0,
            bgcolor: '#192A56',
            zIndex: 1,
          }}>
            <img src={logo} alt="Logo" style={{ height: '35px' }} />
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{
            flex: 1,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '4px',
            },
          }}>
            <List sx={{ px: 2 }}>
              {navItems.map((item) => (
                <ListItem
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    setMobileOpen(false);
                  }}
                  sx={{
                    py: 2, // Increased padding for better touch targets
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    color: location.pathname === item.path ? '#F7C948' : 'white',
                    '&:active': {
                      bgcolor: 'rgba(255,255,255,0.05)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.1rem',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    }}
                  />
                </ListItem>
              ))}

              <ListItem
                onClick={handleMobileLoginToggle}
                sx={{
                  py: 1.5,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  color: '#F7C948',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                <ListItemText
                  primary="Login"
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                />
                <KeyboardArrowDownIcon
                  sx={{
                    transform: mobileLoginOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s',
                  }}
                />
              </ListItem>

              <Collapse in={mobileLoginOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {loginOptions.map((option) => (
                    <ListItem
                      key={option.label}
                      onClick={() => {
                        navigate(option.path);
                        setMobileOpen(false);
                        setMobileLoginOpen(false);
                      }}
                      sx={{
                        pl: 4,
                        py: 1.5,
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.05)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={option.label}
                        primaryTypographyProps={{
                          fontSize: '1rem',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <Box sx={{ height: { xs: '70px', md: '80px' } }} />
    </>
  );
};

export default Navbar;

