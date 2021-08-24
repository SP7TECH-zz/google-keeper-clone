import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from '@material-ui/icons/Add';
import "./CreateArea.scss";
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isZoomed, setZoom] = useState(false);

    function handleTransition() {
        setZoom(true);
    }

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
            <form className="create-note">
                {isZoomed ?
                    <input onChange={handleChange} name="title" placeholder="Enter the title" value={note.title} />
                    : null
                }
                <textarea onClick={handleTransition} onChange={handleChange} name="content" placeholder="Take your Note" value={note.content} rows={isZoomed ? 3 : 1} />

                <Zoom in={isZoomed}>
                    <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;