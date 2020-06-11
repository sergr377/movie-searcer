import React from 'react';
import './App.css';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NewestContainer from './components/Newest/NewestContainer';
import TopRatedContainer from './components/TopRated/TopRatedContainer';
import { BrowserRouter, Route } from "react-router-dom";
import FilmPageContainer from './components/FilmPage/FilmPageContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <NavbarContainer />
        <Typography component="div" style={{ backgroundColor: '#dfe6e9', height: '110%' }} >
          <Route path='/newest'
            render={() => <NewestContainer />} />
          <Route path='/topRated'
            render={() => <TopRatedContainer />} />
          <Route path='/filmPage/:filmId'
            render={() => <FilmPageContainer />} />
        </Typography>
      </Container>
    </BrowserRouter>
  )
}

export default App;