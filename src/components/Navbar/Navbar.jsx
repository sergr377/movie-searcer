import React from 'react';
import { Button, Toolbar, fade, makeStyles, Grid, AppBar } from '@material-ui/core';
import { StyledLinkLight } from '../../style/Styles';
import SearchBar from './Searchbar';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#2d3436',
  },
  button: {
    padding: '6px 8px'
  }
}));

function Navbar(props) {

  const classes = useStyles();

  const [currentButton, setButton] = useState('topRated');

  const changeButton = () => {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve(window.location.hash.slice(2)), 50);
    });
    promise.then(
      result => setButton(result),
      error => alert(error)
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid className='adaptiveGrid'>
            <SearchBar
              getQuery={props.getQuery}
              results={props.results}
              setFilmId={props.setFilmId}
            />
            <Grid className='navButton'>
              <StyledLinkLight to={'/topRated'} >
                <Button className={classes.button} variant={currentButton === 'topRated' ? 'outlined' : 'text'} color="inherit" onClick={() => changeButton()}>Top rated</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/newest'} >
                <Button className={classes.button} variant={currentButton === 'newest' ? 'outlined' : 'text'} color="inherit" onClick={() => changeButton()}>Newest</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/popular'} >
                <Button className={classes.button} variant={currentButton === 'popular' ? 'outlined' : 'text'} color="inherit" onClick={() => changeButton()}>Popular</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/favorite'}>
                <Button className={classes.button} variant={currentButton === 'favorite' ? 'outlined' : 'text'} color="inherit" onClick={() => changeButton()}>Favorite</Button>
              </StyledLinkLight>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar

