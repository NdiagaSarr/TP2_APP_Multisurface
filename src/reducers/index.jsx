const initialState = {
  index: 1,
  boards: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    /* case CREATE_POSTIT:
      return 0;
    case DELETE_POSTIT:
      return 0;
    case CREATE_BOARD:
      return 0;
    case DELETE_BOARD:
      return 0; */
    default:
      return state;
  }
}
export default rootReducer;
