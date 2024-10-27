// src/QRCodeDisplay.js
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

import './QRCodeDisplay.css';

const QRCodeDisplay = ({ onScan }) => {
    const handleQRCodeScan = () => {
        onScan(); // Call the provided onScan function when the QR code is clicked
    };

    return (
        <div className="qr-code-container">
            <p>Scan the QR code to see the inverted colors live!</p>
            <QRCodeCanvas value="your-qr-code-url" onClick={handleQRCodeScan} />
        </div>
    );
};

export default QRCodeDisplay;
