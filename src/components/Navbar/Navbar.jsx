import React from 'react';
import { Button, Toolbar, makeStyles, Grid, AppBar } from '@material-ui/core';
import { StyledLinkLight } from '../../style/Styles';
import SearchBar from './Searchbar';
import { useParams } from "react-router-dom";

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

  let { id } = useParams();
  
  const classes = useStyles();

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
                <Button className={classes.button} variant={id === 'topRated' ? 'outlined' : 'text'} color="inherit" >Top rated</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/newest'} >
                <Button className={classes.button} variant={id === 'newest' ? 'outlined' : 'text'} color="inherit" >Newest</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/popular'} >
                <Button className={classes.button} variant={id === 'popular' ? 'outlined' : 'text'} color="inherit">Popular</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/favorite'}>
                <Button className={classes.button} variant={id === 'favorite' ? 'outlined' : 'text'} color="inherit" >Favorite</Button>
              </StyledLinkLight>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar

