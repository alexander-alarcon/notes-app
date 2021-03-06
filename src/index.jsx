import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { NotesProvider } from './store/notesContext';
import { NoteProvider } from './store/noteContext';

const app = (
  <NotesProvider>
    <NoteProvider>
      <App />
    </NoteProvider>
  </NotesProvider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
