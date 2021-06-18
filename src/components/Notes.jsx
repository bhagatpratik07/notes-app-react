import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
const Notes = ({ notes, saveNote, deleteNote, editNote }) => {
  return (
    <div className="notes">
      <AddNote saveNote={saveNote} deleteNote={deleteNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          id={note.id}
          date={note.date}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
};

export default Notes;
