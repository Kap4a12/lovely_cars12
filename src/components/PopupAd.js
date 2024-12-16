import React, { useEffect, useState } from 'react';
import './PopupAd.css';

const PopupAd = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 10000); // 10 секунд

        const interval = setInterval(() => {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 10000); // 10 секунд
        }, 60000); // 1 минута

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    if (!show) return null;

    return (
        <div className="popup-ad">
            <div className="popup-content">
                <span className="close" onClick={() => setShow(false)}>&times;</span>
                <h2>Специальное предложение!</h2>
                <p>Скидка 20% на все услуги. Успейте воспользоваться!</p>
            </div>
        </div>
    );
};

export default PopupAd;
