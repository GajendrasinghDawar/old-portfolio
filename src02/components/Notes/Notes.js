import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import '../css/Notes.css'

const axios = require('axios').default;

export default function Notes() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        document.title = "GajendrasinghDawar | Notes"
        axios({
            method: 'get',
            url: 'https://gajendrasinghdawar.pythonanywhere.com/notes/',
            responseType: 'json'
        })
            .then((Response) => {
                setNotes(Response.data)
            }).catch((error) => {
                // console.log(error)
                // pass
            })
    }, [])

    const notesToDisplay = notes.map((note) => {
        return (
            <li key={note.id} >
                <p>{note.note_title}</p>
                <Link reloadDocument to={note.id.toString()}>Read It ...</Link>
            </li>
        )
    })
    return (
        <div className="content">
            <div className=" notes-div-flex-container">
                <h1>Self Notes</h1>
                <div>
                    <ol>
                        {notesToDisplay}
                    </ol>
                </div>
            </div>
        </div>
    )
}