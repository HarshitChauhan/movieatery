import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isAuthenticated = true;
  const isMobileDevice = useMediaQuery('(max-width:600px)');

  return (
    <>
      {/* Top Navigation Panel */}
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobileDevice && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} // open Sidebar
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton color="inherit" onClick={() => {}}>
            { theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobileDevice && <SearchBar />}
          <div>
            { !isAuthenticated ? (
              <Button color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobileDevice && <>My Movies&nbsp;</>}
                <Avatar style={{ width: '30', height: '30' }} alt="Profile" src="https://www.istockphoto.com/photos/avatar" />
              </Button>
            )}
          </div>
          {isMobileDevice && <SearchBar />}
        </Toolbar>
      </AppBar>

      {/* Side Navigation Panel */}
      <div>
        <nav className={classes.drawer}>
          {isMobileDevice ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} // close Sidebar
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
