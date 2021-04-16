import React from 'react';

function Board(postit) {
  return (
    postit.postits.postits.map((postits) => (
      <div>
        {postits.type}
        {postits.board}
        {postits.title}
        {postits.text}
        {postits.visible}
        {postits.color}
      </div>
    ))
  );
}

export default Board;
