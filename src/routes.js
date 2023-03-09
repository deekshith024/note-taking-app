import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';

const Routes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={NotesList} />
      <Route path="/notes/:id" component={NoteEditor} />
    </Routes>
  </BrowserRouter>
);

export default Routes;


