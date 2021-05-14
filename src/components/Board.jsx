import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { } from '@material-ui/core/colors';
import Apptoolbarform from './Apptoolbarform';

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
  const { id } = useParams();
  const classes = useStyles();
  const { postits } = boards;
  const [board] = React.useState(postits);
  const rm = [...board].filter((post) => post.board === id);
  if (id === 'addbarre') {
    return (
      <Apptoolbarform add={boards.addbarr} />
    );
  }
  if (rm.length === 0) return <div />;
  return (
    <div>
      {
        rm.map((postit) => (
          <Card
            className={classes.root}
            key={Math.floor(Math.random() * 10000)}
            style={{ backgroundColor: postit.color }}
          >
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
      }
    </div>

  );
}

export default Board;
