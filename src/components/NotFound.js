
import { useEffect } from "react";
function NotFound() {
    useEffect(() => {
        document.title = "GajenrasinghDawar| Not found"
    }, [])

    return (
        <>
            <div className="content">
                <p className="not-found-P">
                    Not Found!
                </p>
            </div>
        </>
    );
}

export default NotFound;
