import { useEffect } from "react";
import QR from "./qr.jsx";

const PC = () => {
   useEffect(() => {
        document.title = "CloverLeaf | PC";
    }, []);
    
    return (
        <div className="pc">
            <h1>The game is available only on mobile devices!</h1>
            <QR />
            <p className="telegram"><img src="/assets/images/Telegram.svg" alt="Telegram"/>@CloverLeafCoinbot</p>
            <p className="version">Currently in Alpha</p>
        </div>
    );
};

export default PC
