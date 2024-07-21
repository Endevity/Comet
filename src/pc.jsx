import { useEffect } from "react";
import QR from "./qr.jsx";

const PC = () => {
   useEffect(() => {
        document.title = "Endevity | PC";
    }, []);
    
    return (
        <div className="pc-div">
            <div className="pc-container">
                <h1>The game is available only on mobile devices!</h1>
                <QR />
                <p className="telegram">@Endevitybot</p>
            </div>
        </div>
    );
};

export default PC
