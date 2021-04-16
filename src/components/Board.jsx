import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: 150,
    background: blue[100],
    margin: theme.spacing(2),
  },
}));

function Board(postit) {
  const classes = useStyles();

  return (
    postit.postits.postits.map((postits) => (
      <Grid container item xs={6} className={classes.root}>
        {postits.title}
        {' '}
        <br />
        {' '}
        <br />
        {postits.text}
      </Grid>
    ))
  );
}

export default Board;
