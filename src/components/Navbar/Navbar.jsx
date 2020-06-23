import React from 'react';
import { Button, Toolbar, fade, makeStyles, Grid, AppBar } from '@material-ui/core';
import { StyledLinkLight } from '../../style/Styles';
import SearchBar from './Searchbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#2d3436',
  },
}));

function Navbar(props) {

  const classes = useStyles();

  // const { width } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid className='adaptiveGrid'>
            <SearchBar
              getQuery={props.getQuery}
              results={props.results}
            />
            <Grid className='navButton'>
              <StyledLinkLight to={'/topRated'} >
                <Button color="inherit" >Top rated</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/newest'} >
                <Button color="inherit" >Newest</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/popular'} >
                <Button color="inherit" >Popular</Button>
              </StyledLinkLight>
              <StyledLinkLight to={'/favorite'}>
                <Button color="inherit">Favorite</Button>
              </StyledLinkLight>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar

