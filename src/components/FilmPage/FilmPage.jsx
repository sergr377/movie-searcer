import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { GridList, GridListTileBar, GridListTile, CardMedia, CardContent, Backdrop } from '@material-ui/core';

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
  },
  paper2: {
    padding: 0,
    marginTop: 5,
    maxWidth: 800,
    margin: 'auto',
  },
  paperFullSize: {
    maxWidth: 1000,
    padding: theme.spacing(2),
    margin: 'auto',
  },
  fullSizeImg: {
    maxWidth: 975,
    padding: theme.spacing(2),
    margin: 'auto',
  },
  paperCast: {
    padding: theme.spacing(2),
    width: 80,
    height: 165
  },
  gridOverview: {
    padding: theme.spacing(2),
    minHeight: 205
  },
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
    transform: 'translateZ(0)',
  },
  cardContent: {
    padding: 6
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  tabsBlock: {
    marginTop: 10,
  },
  actorsGrid: {
    maxHeight: 300,
  }
}));


export default function FilmPage(props) {

  const classes = useStyles();
  const filmGenres = props.film.genres.map((g) => (g.name + '  '))

  // tabs
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //  fullPhotos
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);

  };
  const [picUrl, setfullSizePic] = React.useState('');

  const handleToggle = (e) => {
    setfullSizePic(e.target.alt)
    setOpen(!open);
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
            </Grid>
          </Grid>
        </Grid>
        {/*--------------------------------------------------------- tabs--------------------------------------------------------- */}
        <div className={classes.tabsBlock} >
          <AppBar elevation={0} position="static" color="default" className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="default"
              variant="fullWidth"
            >
              <Tab label="Cast" {...a11yProps(0)} />
              <Tab label="Photos" {...a11yProps(1)} />
              <Tab label="Overview" {...a11yProps(2)} />
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
            {/* ---------------------------------------------------------actors--------------------------------------------------------- */}
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container className={classes.actorsGrid}>
                <Grid container justify="center" spacing={1} >
                  {props.cast.map((data) => (
                    <Grid key={value} item >
                      <Paper className={classes.paperCast} >
                        <CardMedia
                          component="img"
                          alt={data.name}
                          title={data.name}
                          src={!data ? '' :
                            !"https://image.tmdb.org/t/p/w138_and_h175_face/" + data.profile_path ? "https://image.tmdb.org/t/p/w138_and_h175_face/" + data.profile_path : 'https://m.media-amazon.com/images/G/01/IMDbPro/images/default_name._V142442227_UY289_CR46,0,196,250_.png'}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="subtitle2">
                            {data.name}
                          </Typography>
                        </CardContent>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {/*--------------------------------------------------------- slider--------------------------------------------------------- */}
                <GridList className={classes.gridList} cols={2.5}>
                  {props.images.map((tile) => (
                    <GridListTile key={tile.file_path}>
                      <img
                        src={'https://image.tmdb.org/t/p/w500_and_h282_face' + tile.file_path}
                        alt={tile.file_path}
                        onClick={handleToggle} />
                    </GridListTile>
                  ))}
                </GridList>
            </TabPanel>
            {/*--------------------------------------------------------- overview--------------------------------------------------------- */}
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Grid container className={classes.actorsGrid}>
                <Grid container justify="center" spacing={1} className={classes.gridOverview} >
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      {props.film.overview}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <b>Directed By:</b> {(!props.crue[1] ? '' : props.crue.map(data => { if (data.job === 'Director') { return data.name } }))}
                    </Typography>
                    {}
                    <Typography variant="body2" color="textSecondary">
                      <b> Written By:</b> {(!props.crue[0] ? '' : props.crue.map(data => { if (data.job === 'Screenplay') { return (data.name + ' ') } }))}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Runtime:  {( props.film.runtime) + ' minutes'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Budget:  {(props.film.budget) + '$'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Producer country:  {(!props.film.production_countries[0] ? '' : props.film.production_countries.map(data => { return data.name + ' ' }))}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
          </SwipeableViews>
        </div>
      </Paper >
      {/*--------------------------------------------------------- fullSize pic--------------------------------------------------------- */}
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Paper className={classes.paperFullSize}>
          <img
            className={classes.fullSizeImg}
            src={'https://image.tmdb.org/t/p/original/' + picUrl}
            onClick={handleClose} />
        </Paper>
      </Backdrop>
    </div >
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
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

