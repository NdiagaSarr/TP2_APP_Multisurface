import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Apptoolbarform from './Apptoolbarform';

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
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const classes = useStyles();
  const { postits } = board;
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const maj = (value) => {
    board.modif(edit.id, value);
    setEdit({
      id: null,
      value: 'ecrit',
    });
  };

  if (edit.id) {
    return <Apptoolbarform edit={edit} onSubmit={maj} />;
  }

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
              <MenuItem onClick={handleClose} key={postit.id}>
                {postit.title}
                <button type="button" onClick={() => board.suppr(postit.id)}>Supprimer</button>
              </MenuItem>
            ))
          }
        </Menu>
        <Typography variant="h6" className={classes.title}>
          {postits[0].title}
        </Typography>
        {auth && (
        <div>
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
