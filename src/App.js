import React from 'react';
import './App.css';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NewestContainer from './components/Newest/NewestContainer';
import TopRatedContainer from './components/TopRated/TopRatedContainer';
import { HashRouter , Route, Switch } from "react-router-dom";
import FilmPageContainer from './components/FilmPage/FilmPageContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PopularContainer from './components/Popular/PopularContainer';
import FavoriteContainer from './components/Favorite/FavoriteContainer';


const App = () => {
  return (
    <HashRouter  basename='/'>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <NavbarContainer />
        <Typography component="div" style={{ backgroundColor: '#dfe6e9', minHeight: '100vh', height: '100%', paddingTop: '5px' }} >
          <Switch>
            <Route exact path='/'
              render={() => <TopRatedContainer />} />
            <Route path='/newest'
              render={() => <NewestContainer />} />
            <Route path='/popular'
              render={() => <PopularContainer />} />
            <Route path='/topRated'
              render={() => <TopRatedContainer />} />
            <Route path='/favorite'
              render={() => <FavoriteContainer />} />
            <Route path='/filmPage/:filmId'
              component={() => <FilmPageContainer />} />
          </Switch>
        </Typography>
      </Container>
    </HashRouter >
  )
}

export default App; 