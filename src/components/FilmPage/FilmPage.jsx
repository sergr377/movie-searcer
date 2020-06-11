import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { GridList, GridListTileBar, GridListTile } from '@material-ui/core';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    //float:'left'
  },
  paper2: {
    padding: theme.spacing(2),
    marginTop: 5,
    maxWidth: 800,
    //float:'left'

    margin: 'auto',
  },
  image: {},
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '90%',
    maxHeight: '100%',
  },


  slider: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  tabsBar: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  }
}));


export default function FilmPage(props) {
  const classes = useStyles();
  const filmGenres = props.film.genres.map((g) => (g.name + '  '))

  //свойства вкладок
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="row">
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + props.film.poster_path} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.film.original_title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.film.tagline}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Жанр: {filmGenres}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Рейтинг: {props.film.vote_average}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Дата выхода: {props.film.release_date}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Вкладки */}
        <div className={classes.tabsBar}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Cast" {...a11yProps(0)} />
              <Tab label="Photos" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </div>
      </Paper>
      <Paper className={classes.paper2}>
        <div className={classes.tabsBar}>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Cast
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {/* Слайдер */}
              <div className={classes.slider}>
                <GridList className={classes.gridList} cols={2.5}>
                  {props.images.map((tile) => (
                    <GridListTile key={tile.file_path}>
                      <img src={'https://image.tmdb.org/t/p/w500_and_h282_face' + tile.file_path} alt={tile.file_path} />
                      <GridListTileBar
                        //  title={tile.file_path}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </div>
      </Paper >
    </div>
  );
}



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


