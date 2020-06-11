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

  const [anchorEl, setAnchorEl] = React.useState(false);

  const requestData = (e) => {
    requestQuery(e)
    setAnchorEl(true)
  }

  const requestQuery = (e) => props.getQuery(e)

  const handleClick = () => {
    setAnchorEl(false);
    clearField()
  };

  const clearField = () => {
    document.getElementById('inputField').value = ''
  }
 
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>

          <div className={classes.search}>

            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              id={'inputField'}
              onChange={requestData}
              placeholder="Search movie"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div >
              <Popper id={id} open={open} anchorEl={document.getElementById('inputField')} onClick={handleClick}>
                {props.results.map(film =>
                  <StyledLinkDark to={'/FilmPage/' + (!film ? '' : film.id)}>
                    {/* {console.log('тест')} */}
                    <List className={classes.list}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            variant="square"
                            className={classes.avatar}
                            alt={!film ? '' : film.original_title}
                            src={"https://image.tmdb.org/t/p/w58_and_h87_face" + (!film ? '' : film.poster_path)}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          className={classes.list}
                          primary={!film ? '' : film.original_title}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                Release:
                              </Typography>
                              {!film ? '' : (' ' + (!film.release_date ? 'None' : film.release_date.slice(0, 4)))}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </List>
                  </StyledLinkDark >
                )}

              </Popper>
            </div>
          </div>

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
