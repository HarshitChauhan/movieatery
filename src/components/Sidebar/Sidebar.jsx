import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
import movieateryLogoBlue from './MovieateryLogoBlue.png';
import movieateryLogoRed from './MovieateryLogoRed.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const genres = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

function Sidebar({ setMobileOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? movieateryLogoBlue : movieateryLogoRed}
          alt="Movieatery logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        { categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={(() => {})} button>
              {/* <ListItemIcon>
                <img src="https://fontmeme.com/temporary/4c7b78b8f8f9d04764b6eea7bab831c2.png" className={classes.genreImages} height={30} alt={label} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        { genres.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={(() => {})} button>
              {/* <ListItemIcon>
                <img src="https://fontmeme.com/temporary/4c7b78b8f8f9d04764b6eea7bab831c2.png" className={classes.genreImages} height={30} alt={label} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
