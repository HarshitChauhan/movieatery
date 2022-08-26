import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.mode === 'light' && 'black',
      filter: theme.palette.mode === 'light' && 'invert(1)',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  input: {
    color: theme.palette.mode === 'light' && 'black',
    filter: theme.palette.mode === 'light' && 'invert(1)',
    [theme.breakpoints.down('sm')]: {
      margin: '-1px -5px -1px -5px',
      // marginBottom: '10px',
      // marginLeft: '-5px',
    },
  },
}));
