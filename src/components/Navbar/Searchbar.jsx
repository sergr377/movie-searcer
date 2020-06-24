import React from 'react';
import { InputBase, fade, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { StyledLinkDark } from '../../style/Styles';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    inline: {
        display: 'inline',
    },
    list: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0
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
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        }
    },
}));

export default function SearchBar(props) {

    document.addEventListener('click', function (e) {
        if (e.target.id != 'simple-popper') {
            setAnchorEl(false);
            clearField()
        }
    });

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(false);

    const clearField = () => {
        document.getElementById('inputField').value = ''
    }

    const requestData = (e) => {
        requestQuery(e)
        setAnchorEl(true)
    }

    const requestQuery = (e) => props.getQuery(e)

    const handleClick = () => {
        setAnchorEl(false);
        clearField()
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <div id={'search'} className={classes.search}>
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
            {/* выпадающий список */}
            <div >
                <Popper id={id} open={open} anchorEl={document.getElementById('search')} onClick={handleClick}>
                    {props.results.map(film =>
                        <StyledLinkDark to={{ pathname: '/FilmPage/' + (!film ? '' : film.id) }}>
                            <List className={classes.list}>
                                <ListItem className='searchItem' alignItems="flex-start">
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
    )
}