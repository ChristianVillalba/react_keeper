import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
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
      <Header />
      <CreateArea />
      <Note key={index} id={index} title={noteTitle} content={noteContent} />
      <Footer />
    </div>
  );
}

export default App;
