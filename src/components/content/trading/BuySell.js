import React, { useState } from 'react';

export function BuySell(props) {
    const [buyQuantity, setBuyQuantity] = useState(1);
    const [buyPrice, setBuyPrice] = useState(props.price);
    const [buySumPrice, setBuySumPrice] = useState(props.price);
    const [sellQuantity, setSellQuantity] = useState(1);
    const [sellPrice, setSellPrice] = useState(props.price);
    const [sellSumPrice, setSellSumPrice] = useState(props.price);

    const handleBuyQuantityChange = (e) => {
        setBuyQuantity(e.target.value);
        setBuySumPrice(e.target.value * buyPrice);
    };

    const handleBuyPriceChange = (e) => {
        setBuyPrice(e.target.value);
        setBuySumPrice(buyQuantity * e.target.value);
    };

    const handleSellQuantityChange = (e) => {
        setSellQuantity(e.target.value);
        setSellSumPrice(e.target.value * sellPrice);
    };

    const handleSellPriceChange = (e) => {
        setSellPrice(e.target.value);
        setSellSumPrice(sellQuantity * e.target.value);
    };

    const handleBuy = () => {
        // Обработка логики покупки
        console.log(`Покупка: Количество - ${buyQuantity}, Сумма - ${buySumPrice}`);
    };

    const handleSell = () => {
        // Обработка логики продажи
        console.log(`Продажа: Количество - ${sellQuantity}, Сумма - ${sellSumPrice}`);
    };

    return (
        <div>
            <h2>Торговля</h2>
            <div className={'trade'}>
                <div>
                    <label>Количество покупки:</label>
                    <input
                        type="number"
                        value={buyQuantity}
                        onChange={handleBuyQuantityChange}
                    />
                </div>
                <div>
                    <label>Цена за единицу:</label>
                    <input
                        type="number"
                        value={buyPrice}
                        onChange={handleBuyPriceChange}
                    />
                </div>
                <div>
                    <label>Сумма покупки:</label>
                    <input type="text" value={buySumPrice} disabled />
                </div>
                <button onClick={handleBuy}>Купить</button>
            </div>
            <div className={'trade'}>
                <div>
                    <label>Количество продажи:</label>
                    <input
                        type="number"
                        value={sellQuantity}
                        onChange={handleSellQuantityChange}
                    />
                </div>
                <div>
                    <label>Цена за единицу:</label>
                    <input
                        type="number"
                        value={sellPrice}
                        onChange={handleSellPriceChange}
                    />
                </div>
                <div>
                    <label>Сумма продажи:</label>
                    <input type="text" value={sellSumPrice} disabled />
                </div>
                <button onClick={handleSell}>Продать</button>
            </div>
        </div>
    );
};