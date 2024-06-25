import { QRCode } from "react-qrcode-logo";

const QR = () => {
    return (
        <QRCode
            value="https://t.me/CloverLeafCoinbot"
            size={200}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            qrStyle="dots"
            eyeRadius={[
                { outer: [20, 20, 20, 20], inner: [5, 5, 5, 5] },
                { outer: [20, 20, 20, 20], inner: [5, 5, 5, 5] },
                { outer: [20, 20, 20, 20], inner: [5, 5, 5, 5] },
            ]}       
        />
    );
}

export default QR;