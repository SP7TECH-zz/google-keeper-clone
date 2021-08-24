import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CreateArea from "./components/create-area/CreateArea";
import Note from "./components/note/Note";
import Footer from "./components/footer/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
