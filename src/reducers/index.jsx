import { CREATE_POSTIT } from '../actions';

const initialState = {
  index: 1,
  boards: [
    {
      type: 'board',
      id: '1',
      title: 'TIW 8',
      notes: '',
      postits: [
        {
          type: 'postit',
          board: '1',
          title: 'TP 1',
          text: 'Le TP porte sur des rappels de developpement Web',
          visible: false,
          color: '#CCC',
        },
        {
          type: 'postit',
          board: '1',
          title: 'TP 2',
          text: "Le TP porte sur la creation d'un outil de presentation HTML",
          visible: true,
          color: '#00E',
        },
        {
          type: 'postit',
          board: '1',
          title: 'TP 3',
          text: 'Le TP 3',
          visible: true,
          color: '#00E',
        },
        {
          type: 'postit',
          board: '1',
          title: 'TP 4',
          text: 'Le TP 4',
          visible: true,
          color: '#0E0',
        },
      ],
    },
    {
      type: 'board',
      id: '2',
      title: 'Courses',
      notes: '',
      postits: [],
    }],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POSTIT:
      return [...state, ...action.playload];
    /* case DELETE_POSTIT:
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
