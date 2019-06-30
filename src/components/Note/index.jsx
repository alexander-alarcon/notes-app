import React, { useCallback, useContext } from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import { NotesContext } from '../../store/notesContext';

import IconButton from '../IconButton';

function Note({ note, onEdit }) {
  const { removeNote } = useContext(NotesContext);
  const noteClasses = `Note bg-${note.color}`;
  const handleRemoveNote = useCallback(() => {
    removeNote(note.id);
  }, [note.id, removeNote]);
  return (
    <div className={noteClasses}>
      <div className="Note__Header">
        <IconButton iconName="fa-edit" onClick={onEdit} disabled={false} />
        <IconButton
          iconName="fa-trash"
          onClick={handleRemoveNote}
          disabled={false}
        />
      </div>
      <pre className="Note__Body">{note.body}</pre>
      <div className="Note__Footer">
        <span>
          created at:
          {note.createdAt.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })}
        </span>
        {' - '}
        <span>
          updated at:
          {note.updatedAt.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })}
        </span>
      </div>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Note;
