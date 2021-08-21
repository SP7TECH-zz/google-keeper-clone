import React, { useState } from "react";
import Header from "./components/header/Header";

function App() {
  // const [notes, setNotes] = useState;

  // function addNote(note) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, note];
  //   });
  // }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((item, index) => {
  //       return index != id;
  //     });
  //   });
  // }

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
