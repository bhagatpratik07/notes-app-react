import React, { useState } from "react";
import { MdEdit, MdSave } from "react-icons/md";

export default function EditNote({ saveNote, editNote, toggleEditNote, id }) {
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
    toggleEditNote();
  };

  return (
    <div className="edit">
      <div className="note new">
        <textarea
          cols="10"
          rows="8"
          placeholder="Edit note..."
          onChange={handleChange}
        ></textarea>
        <div className="footer">
          <span>{characterLimit - noteText.length} remaining</span>
          <MdEdit className="edit-btn" onClick={editNote} />
          <MdSave className="save-btn" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}
