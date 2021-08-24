import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {value, name} = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);

        setNote({
            title: "",
            content: ""
        });

        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Enter the title" value={note.title} />
                <textarea onChange={handleChange} name="note" placeholder="Take your Note" value={note.content} />

                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;