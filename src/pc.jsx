import { useEffect } from "react";
import QR from "./qr.jsx";

const PC = () => {
   useEffect(() => {
        document.title = "CloverLeaf | PC";
    }, []);
    
    return (
        <div className="pc-div">
            <div className="pc-container">
                <h1>The game is available only on mobile devices!</h1>
                <QR />
                <p className="telegram">@CloverLeafCoinbot</p>
            </div>
        </div>
    );
};

export default PC
