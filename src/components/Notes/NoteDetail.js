import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NoteDetail() {
    let { id } = useParams();
    return (
        <>
            <div className="content">

                <h>Its Detail for how to deploy :{id}</h>
            </div>
        </>
    );
}

export default NoteDetail;
