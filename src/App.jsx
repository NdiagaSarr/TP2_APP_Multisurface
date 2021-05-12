import React from 'react';
import Board from './components/Board';
import AppToolbar from './components/AppToolbar';
import store from './store/index';
import Apptoolbarform from './components/Apptoolbarform';

window.store = store;

const Tableau = [
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
  },
];

function App() {
  const [boards, setboards] = React.useState(Tableau);

  const ajoutertoolbar = (types, titles, notes) => {
    const newtoolbar = [...boards, {
      type: types,
      id: Math.floor(Math.random() * 10000),
      title: titles,
      note: notes,
      postits: [],
    }];
    setboards(newtoolbar);
  };
  return (
    <div className="app">
      <Apptoolbarform
        postits={ajoutertoolbar}
      />
      <div className="board">
        <AppToolbar
          postits={boards}
        />
        <div className="postits">
          <Board
            postits={boards}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
