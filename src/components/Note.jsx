import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Note = ({ id, text, date, deleteNote, editNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="footer">
        <p>{date}</p>
        <MdEdit className="delete" onClick={() => editNote()} />
        <MdDelete
          onClick={() => deleteNote(id)}
          className="delete"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
