import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [myNotes, setMyNotes] = useState([]);

  function addNote(newNote) {
    setMyNotes((prevNotes) => {
      [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {myNotes.map((noteItem) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
