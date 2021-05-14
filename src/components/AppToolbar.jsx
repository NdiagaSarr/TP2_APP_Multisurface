import React from 'react';
import {
  BrowserRouter, Link, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { MenuList } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppToolbar(board) {
  const classes = useStyles();
  const { postits } = board;
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [choisi, setChoisi] = React.useState(postits[0]);

  const { path } = useRouteMatch();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={handleMenu}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          {
                postits.map((postit) => (
                  <MenuList
                    onClick={handleClose}
                    key={postit.id}
                    className={classes.menuButton}
                    style={{ backgroundColor: blue }}
                  >
                    <ul>
                      <li>{postit.title}</li>
                      <Link to={`${postit.id}`}>
                        <button
                          type="button"
                          className={classes.menuButton}
                          onClick={() => setChoisi(postit)}
                        >
                          Selectionner
                        </button>
                      </Link>
                      <button
                        type="button"
                        className={classes.menuButton}
                        onClick={() => board.suppr(postit.id)}
                      >
                        Supprimer
                      </button>
                    </ul>
                  </MenuList>
                ))
              }
        </Menu>
        <BrowserRouter>
          <Typography variant="h6" className={classes.title}>
            <Switch>
              <Route exact path={path}>
                Choisissez un tableau
              </Route>
              <Route path={`${path}${choisi.id}`}>
                {choisi.title}
              </Route>
            </Switch>
          </Typography>
        </BrowserRouter>
        {auth && (
          <div>
            <Fab color="secondary" aria-label="add">
              <Link to="/addbarre">
                <AddIcon />
              </Link>
            </Fab>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
