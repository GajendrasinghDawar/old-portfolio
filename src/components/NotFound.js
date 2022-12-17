import { useEffect } from "react";

import "./css/NotFound.css";

function NotFound() {
    useEffect(() => {
        document.title = "GajenrasinghDawar| Not found"
    }, [])

    return (
            <div className="content notfound">
                <p className="not-found-P">
                    Not Found!
                </p>
        </div>
    );
}

export default NotFound;
