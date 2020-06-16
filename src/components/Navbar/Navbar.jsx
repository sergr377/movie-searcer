import React from 'react';
import { Button, InputBase, Toolbar, fade, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar } from '@material-ui/core';
import { StyledLinkLight, StyledLinkDark } from '../../style/Styles';
import Popper from '@material-ui/core/Popper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FilmPage from '../FilmPage/FilmPage';
import SearchBar from './Searchbar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  inline: {
    display: 'inline',
  },
  list: {
    maxWidth: '36ch',
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#2d3436'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //настройка цвета элементов внутри 
  inputRoot: {
    color: 'inherit',
  },
  //настройка положения элементов внутри других
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    avatar: {

    }
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <SearchBar
            getQuery={props.getQuery}
            results={props.results}
          />
          
          {/* <Switch>
            <Route path='/newest'
              render={() => <NewestContainer />} />
            <Route path='/topRated'
              render={() => <TopRatedContainer />} />
            <Route path='/filmPage/:filmId'
              render={() => <FilmPageContainer />} />
          </Switch>  */}
          
          <StyledLinkLight to={'/newest'} >
            <Button color="inherit">Newest</Button>
          </StyledLinkLight>
          <StyledLinkLight to={'/topRated'} >
            <Button color="inherit">top rated</Button>
          </StyledLinkLight>
          <Button color="inherit">Favorite</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
