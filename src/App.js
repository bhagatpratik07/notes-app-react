import React, { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import EditNote from "./components/EditNote";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a note",
      date: "12/5/21",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editNote, setEditNote] = useState(false);
  const saveNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      date: date.toLocaleDateString(),
      text: text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const toggleEditNote = () => {
    setEditNote(!editNote);
  };

  // edit
  const editNote1 = () => {
    setEditNote(!editNote);
    console.log("edit");
  };

  if (editNote) {
    return (
      <div className="App">
        <EditNote
          saveNote={saveNote}
          editNote={editNote1}
          toggleEditNote={toggleEditNote}
          id={notes.id}
        />
      </div>
    );
  }
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="App">
        <Header toggleDarkMode={setDarkMode} />
        <Search searchText={setSearchText} />

        <Notes
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          saveNote={saveNote}
          deleteNote={deleteNote}
          editNote={editNote1}
          setEditNote={setEditNote}
        />
      </div>
    </div>
  );
}

export default App;
