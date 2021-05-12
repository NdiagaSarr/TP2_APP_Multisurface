import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    width: 250,
    marginTop: 15,
    marginRight: 15,
    justifyContent: 'spaceBetween',
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
    postits.postits.map((postit) => (
      <Card className={classes.root} key={postit.title} style={{ backgroundColor: postit.color }}>
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
