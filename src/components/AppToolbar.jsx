import React from 'react';

function AppToolbar(postit) {
  return (
    <div className="postit">
      {postit.postits.type}
      {postit.postits.id}
      {postit.postits.title}
      {postit.postits.notes}
    </div>
  );
}

export default AppToolbar;
