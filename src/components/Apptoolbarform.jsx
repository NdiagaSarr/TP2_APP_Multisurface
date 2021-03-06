import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Apptoolbarform(newadd) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [text, settext] = useState('');

  const soumettre = (e) => {
    e.preventDefault();
    if (!title || !text) return;
    newadd.add(title, text, []);
    setTitle('');
    settext('');
  };

  const changetitle = (e) => {
    setTitle(e.target.value);
  };

  const changenote = (e) => {
    settext(e.target.value);
  };

  return (
    <form className={classes.menuButton} onSubmit={soumettre}>
      <TextField
        className={classes.menuButton}
        type="text"
        label="Titre"
        value={title}
        name="title"
        onChange={changetitle}
      />
      {' '}
      <br />
      <TextField
        className={classes.menuButton}
        type="text"
        label="Text"
        value={text}
        name="text"
        onChange={changenote}
      />
      {' '}
      <br />
      <Button
        type="submit"
        className={classes.menuButton}
        variant="contained"
        color="primary"
      >
        Ajouter
      </Button>
      <Link to="/">
        <Button
          type="submit"
          className={classes.menuButton}
          variant="contained"
          color="secondary"
        >
          Retour
        </Button>
      </Link>
    </form>
  );
}
