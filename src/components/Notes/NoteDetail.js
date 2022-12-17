import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../css/NoteDetail.css";

const axios = require('axios').default;

export default function NoteDetail() {

    let { id } = useParams();

    const [notesDetail, setNotesDetail] = useState([])
    const [styleCopy, setStyleCopy] = useState({
        visibility: 'hidden'
    })

    useEffect(() => {
        document.title = "GajendrasinghDawar | Notes detail"
        axios({
            method: 'get',
            url: `https://gajendrasinghdawar.pythonanywhere.com/myportfolio_api/${id}`,
            responseType: 'json'
        })
            .then((Response) => {
                setNotesDetail(Response.data)
                // console.log(Response.data)
            }).catch((error) => {
                console.log(error)
            })

    }, [])

    async function copyCode(text) {
        try {
            await navigator.clipboard.writeText(text);
            setStyleCopy({
                visibility: ''
            })
        } catch (err) {
            // pass
        }
    }

    useEffect(() => {
        let myTimeout = setTimeout(() => {
            setStyleCopy({
                visibility: 'hidden'
            })
        }, 2500)
        return () => clearTimeout(myTimeout)

    }, [styleCopy])

    return (
        <div className="content">
            <div className="arrow-flex">
                <Link to={"/notes"}> <i className="fa fa-solid fa-arrow-left"></i></Link>
            </div>
            <article className="detail-div-flex">
                <h1>{notesDetail.note_title}</h1>
                <p>
                    {notesDetail.description}
                </p>
                < >
                    <h3>{notesDetail.snippet_title_01}</h3>
                    <p>{notesDetail.snippet_description_01}</p>
                    <div className="code-snippet-div">
                        <span className="copy-icon-div" onClick={(e) => copyCode(notesDetail.snippet_01)} >
                            <i className="fa fa-solid fa-paste"></i>
                        </span>
                        <div className="pre-div">
                            <pre>
                                <code>
                                    {notesDetail.snippet_01}
                                </code>
                            </pre>
                        </div>
                    </div>
                </>
                < >
                    <h3>{notesDetail.snippet_title_02}</h3>
                    <p>{notesDetail.snippet_description_02}</p>
                    <div className="code-snippet-div">
                        <span className="copy-icon-div" onClick={(e) => copyCode(notesDetail.snippet_02)}>  <i className="fa fa-solid fa-paste"></i></span>
                        <div className="pre-div">
                            <pre>
                                <code>
                                    {notesDetail.snippet_02}
                                </code>

                            </pre>
                        </div>
                    </div>
                </>
                < >
                    <h3>{notesDetail.snippet_title_03}</h3>
                    <p>{notesDetail.snippet_description_03}</p>
                    <div className="code-snippet-div">
                        <span className="copy-icon-div" onClick={(e) => copyCode(notesDetail.snippet_03)}>  <i className="fa fa-solid fa-paste"></i></span>
                        <div className="pre-div">
                            <pre>
                                <code>
                                    {notesDetail.snippet_03}
                                </code>

                            </pre>
                        </div>
                    </div>
                </>
                < >
                    <h3>{notesDetail.snippet_title_04}</h3>
                    <p>{notesDetail.snippet_description_04}</p>
                    <div className="code-snippet-div">
                        <span className="copy-icon-div" onClick={(e) => copyCode(notesDetail.snippet_04)}>  <i className="fa fa-solid fa-paste"></i></span>
                        <div className="pre-div">
                            <pre>
                                <code>
                                    {notesDetail.snippet_04}
                                </code>
                            </pre>
                        </div>
                    </div>
                </>
            </article>
            <div className="copy-popup" style={styleCopy}>copied!</div>
        </div>
    );
}
