import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function handleTitleChange(event) {
    const newValue = event.target.value;
    setNoteTitle(newValue);
  }
  function handleContentChange(event) {
    const newValue = event.target.value;
    setNoteContent(newValue);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          value={noteTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleContentChange}
          value={noteContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
