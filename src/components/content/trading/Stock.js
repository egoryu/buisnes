import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "../../../style/trade.css"
import {useParams} from "react-router-dom";
import {BuySell} from "./BuySell";
import TradeService from "../../../api/api.trade";

/*const data = [];

for (let i = 0; i < 100; i++) {
    const date = new Date(Math.random() * 26 + 2000, Math.random() * 12, Math.random() * 29, Math.random() * 24);
    const price = Math.floor(Math.random() * 1000) + 1;
    data.push({ time: date, price: price });
}*/

export function Stock() {
    let sortedData = [{ time:  new Date(Math.random() * 26 + 2000, Math.random() * 12, Math.random() * 29, Math.random() * 24), price: 2 }];
    const [chartData, setChartData] = useState(sortedData);
    const {id} = useParams()

    useEffect( () => {
        fetchData();
    },);

    const fetchData = async () => {
        try {
            const response = await TradeService.getStockData(id);
            const data = response.data;
            sortedData = data.sort((a, b) => a.time - b.time);
            setChartData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChangeInterval = (newTime) => {
        setChartData(sortedData.filter(el => el.time > newTime));
    };

    const handleBuy = (amount) => {
        console.log(`Покупка: Количество - ${amount}`);
        TradeService.stockBuy(id, amount).catch(err => alert(err));
    };

    const handleSell = (amount) => {
        console.log(`Продажа: Количество - ${amount}`);
        TradeService.stockSell(id, amount).catch(err => alert(err));
    };

    return (
        <div className={"stock-container"}>
            <div className={"graph"}>
                <LineChart width={800} height={400} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </div>
            <div className={"buttons"}>
                <div onClick={() => handleChangeInterval(new Date(1000, 1))}>All</div>
                <div onClick={() => handleChangeInterval(new Date(new Date().getTime() - (60 * 60 * 1000)))}>Last 1 hour</div>
                <div onClick={() => handleChangeInterval(new Date(new Date().getTime() - (24 * 60 * 60 * 1000)))}>Last 24 hours</div>
                <div onClick={() => handleChangeInterval(new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))}>Last week</div>
                <div onClick={() => handleChangeInterval(new Date(new Date().getTime() - (30 * 24 * 60 * 60 * 1000)))}>Last month</div>
                <div onClick={() => handleChangeInterval(new Date(new Date().getTime() - (365 * 24 * 60 * 60 * 1000)))}>Last year</div>
            </div>
            <BuySell price={sortedData[sortedData.length - 1].price} handleBuy={handleBuy} handleSell={handleSell}/>
        </div>
    );
}
