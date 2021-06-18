import React from "react";

export default function Header({ toggleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={() => toggleDarkMode((prev) => !prev)} className="theme">
        Change Theme
      </button>
    </div>
  );
}
