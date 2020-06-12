import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { GridList, GridListTileBar, GridListTile, CardMedia, CardContent, CardActionArea, CircularProgress, Backdrop } from '@material-ui/core';

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
    // height: 250,
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
  actorsGrid: {
    //height: 200,
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
  },
  cardContent: {
    padding: 6
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
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

  // свойства fullPhotos
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
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*--------------------------------------------------------- Вкладки--------------------------------------------------------- */}
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
            {/* ---------------------------------------------------------Актеры--------------------------------------------------------- */}
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container className={classes.actorsGrid}>
                <Grid container justify="center" spacing={1} >
                  {props.cast.map((data) => (
                    <Grid key={value} item >
                      <Paper className={classes.paperCast} >
                        <CardMedia
                          component="img"
                          alt={!data ? '' : data.name}
                          title={!data ? '' : data.name}
                          src={!data ? '' : "https://image.tmdb.org/t/p/w138_and_h175_face/" + data.profile_path}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="subtitle2">
                            {!data ? '' : data.name}
                          </Typography>
                        </CardContent>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {/*--------------------------------------------------------- Слайдер--------------------------------------------------------- */}
              <div className={classes.slider}>
                <GridList className={classes.gridList} cols={2.5}>
                  {props.images.map((tile) => (
                    <GridListTile key={tile.file_path}>
                      <img
                        src={'https://image.tmdb.org/t/p/w500_and_h282_face' + tile.file_path}
                        alt={tile.file_path}
                        onClick={handleToggle} />
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
      {/*--------------------------------------------------------- fullSize pic--------------------------------------------------------- */}
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
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
//https://image.tmdb.org/t/p/w533_and_h300_bestv2/tvjCdVRkaaab2ezM9BctkAOXeyW.jpg
//https://image.tmdb.org/t/p/original/3RarN70b6lohFJFVUdudXRQF6zi.jpg

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


