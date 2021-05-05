export const CREATE_BOARD = 'CREATE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CREATE_POSTIT = 'CREATE_POSTIT';
export const DELETE_POSTIT = 'DELETE_POSTIT';

export const createBoard = (playload) => ({
  type: CREATE_BOARD,
  playload,
});

export const deleteBoard = (playload) => ({
  type: DELETE_BOARD,
  playload,
});

export const createPostit = (playload) => ({
  type: CREATE_POSTIT,
  playload,
});

export const deletePostit = (playload) => ({
  type: DELETE_POSTIT,
  playload,
});
