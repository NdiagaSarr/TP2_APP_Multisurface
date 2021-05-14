import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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

export default function Boardform(newadd) {
  const { id } = useParams();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const soumettre = (e) => {
    e.preventDefault();
    if (!title || !note) return;
    newadd.addboard(id, title, note);
    setTitle('');
    setNote('');
  };

  const changetitle = (e) => {
    setTitle(e.target.value);
  };

  const changenote = (e) => {
    setNote(e.target.value);
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
        label="Note"
        value={note}
        name="note"
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
