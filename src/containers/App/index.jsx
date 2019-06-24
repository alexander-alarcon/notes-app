import React, { useContext } from 'react';
import randomWords from 'random-words';

import './index.css';

import { NotesContext } from '../../store/notesContext';

import NoteList from '../../components/NoteList';
import IconButton from '../../components/IconButton';

function App() {
  const {
    state: { notes },
    addNote,
    removeNote,
    editNote
  } = useContext(NotesContext);
  return (
    <div className="App">
      <NoteList notes={notes} />
      <IconButton
        iconName="fa-plus-circle"
        handleClick={() => addNote({ id: 1, body: 'lorem' })}
      />
      <IconButton iconName="fa-trash" handleClick={() => removeNote(1)} />
      <IconButton
        iconName="fa-edit"
        handleClick={() => {
          editNote(1, { id: 1, body: randomWords() });
        }}
      />
    </div>
  );
}

export default App;
