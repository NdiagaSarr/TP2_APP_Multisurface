import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    width: 250,
    marginTop: 15,
    marginRight: 15,
    justifyContent: 'spaceBetween',
    background: '#ffff98',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Board(boards) {
  const classes = useStyles();
  const { postits } = boards;
  return (
    postits[0].postits.map((postit) => (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {postit.title}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {postit.text}
          </Typography>
        </CardContent>
      </Card>
    ))
  );
}

export default Board;
