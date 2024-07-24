import { useEffect } from "react";
import QR from "./qr.jsx";

const PC = () => {
   useEffect(() => {
        document.title = "Comet | PC";
    }, []);
    
    return (
        <div className="pc-div">
            <div className="pc-container">
                <h1>The game is available only on mobile devices!</h1>
                <QR />
                <p className="telegram">@TheComet_bot</p>
            </div>
        </div>
    );
};

export default PC
