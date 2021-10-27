import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [myNotes, setMyNotes] = useState([]);

  // Edit
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
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
