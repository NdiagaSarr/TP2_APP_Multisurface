import React from 'react';
import { Link } from 'react-router-dom';
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
import Board from './Board';

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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
                    <button
                      type="button"
                      className={classes.menuButton}
                      onClick={() => setChoisi(postit)}
                    >
                      Selectionner
                    </button>
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
          <Typography variant="h6" className={classes.title}>
            {choisi.title}
          </Typography>
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
      <Board postits={choisi} />
    </div>
  );
}

export default AppToolbar;
