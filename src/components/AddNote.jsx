import React, { useState } from "react";

const AddNote = ({ saveNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      saveNote(noteText);
    }
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Add a new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="footer">
        <span>{characterLimit - noteText.length} remaining</span>
        <button className="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
