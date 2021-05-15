import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import AppToolbar from './components/AppToolbar';
import store from './store/index';
import Board from './components/Board';
import Boardform from './components/Boardform';

window.store = store;

function App() {
  const [boards, setboards] = React.useState(window.store.getState().boards);
  const liste = boards.map((postit) => (
    postit.postits
  ));
  console.log(boards, liste);
  const [postits, setpostits] = React.useState(liste[0]);
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

  const ajouterboard = (id, titl, tex) => {
    const newpostit = [...postits, {
      type: 'postit',
      board: id,
      title: titl,
      text: tex,
      visible: 'true',
      color: 'blue',
    }];
    setpostits(newpostit);
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
              postits={postits}
              addbarr={ajoutertoolbar}
            />
          </Route>
          <Route path="/addboard/:id">
            <Boardform
              addboard={ajouterboard}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
