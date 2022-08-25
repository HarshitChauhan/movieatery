import React, { useEffect, useState, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import { createSessionId, fetchToken, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../features/auth';
import { ColorModeContext } from '../../utils/ToggleThemeMode';

function Navbar() {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();
  const themeMode = useContext(ColorModeContext);

  const authToken = localStorage.getItem('request_token');
  const sessionId = localStorage.getItem('session_id');

  useEffect(() => {
    const userLogIn = async () => {
      if (authToken) {
        if (sessionId) {
          // using already created session id
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        } else {
          // create new session id
          const newSessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${newSessionId}`);
          dispatch(setUser(userData));
        }
      }
    };
    userLogIn();
  }, [authToken]);

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
          <IconButton color="inherit" onClick={themeMode.toggleThemeMode}>
            { theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobileDevice && <SearchBar />}
          <div>
            { !isAuthenticated ? (
              <Button color="inherit" sx={{ ml: 1 }} onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
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
