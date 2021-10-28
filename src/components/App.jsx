import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [myNotes, setMyNotes] = useState([]);

  // Edit
  function addNoteTitle(noteTitle) {
    setMyNotes((prevTitles) => {
      return [...prevTitles, noteTitle];
    });
  }
  function addNoteContent(noteContent) {
    setMyNotes((prevContents) => {
      return [...prevContents, noteContent];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddTitle={addNoteTitle} onAddContent={addNoteContent} />
      {myNotes.map((noteTitle, index) => (
        <Note key={index} id={index} title={noteTitle} content={noteContent} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
