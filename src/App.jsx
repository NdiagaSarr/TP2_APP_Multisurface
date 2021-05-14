import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppToolbar from './components/AppToolbar';
import store from './store/index';
import Board from './components/Board';

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

  const ajoutertoolbar = (titles, notes) => {
    const newtoolbar = [...boards, {
      type: 'board',
      id: Math.floor(Math.random() * 10000),
      title: titles,
      note: notes,
      postits: [],
    }];
    setboards(newtoolbar);
  };

  const supprimertoolbar = (id) => {
    const rm = [...boards].filter((board) => board.id !== id);
    setboards(rm);
  };

  return (
    <div>
      <BrowserRouter>
        <AppToolbar
          postits={boards}
          suppr={supprimertoolbar}
        />
        <Switch>
          <Route exact path="/:id">
            <Board
              postits={boards}
              addbarr={ajoutertoolbar}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
