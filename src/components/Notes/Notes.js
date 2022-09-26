import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Notes() {
    useEffect(() => {
        document.title = "GajendrasinghDawar | Notes"

    }, [])

    return (
        <>

            <div className="content">
                <div className=" notes-div-flex-container">
                    <h1>Self Notes</h1>
                    <div>
                        <ol>
                            <li key={1} >
                                <p>{'how to deploy react on amplify'}</p>
                                <Link to={'1'}>Read It ...</Link>
                            </li>
                            <li key={2} >
                                <p>{'how to deploy react on amplify'}</p>
                                <Link to={'2'}>Read It ...</Link>
                            </li>
                            <li key={3} >
                                <p>{'how to deploy react on amplify'}</p>
                                <Link to={'3'}>Read It ...</Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notes;
