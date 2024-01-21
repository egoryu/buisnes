import {List} from "./List";
import "../../../style/trade.css"
import React, {useEffect, useState} from "react";
import {Category} from "./Category";
import TradeService from "../../../api/api.trade";

export function Trade() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Ozon',
            category: 'stock',
        },
        {
            id: 2,
            name: 'Yandex',
            category: 'stock',
        },
        {
            id: 3,
            name: 'Google',
            category: 'stock',
        },
        {
            id: 4,
            name: 'Vk',
            category: 'stock',
        },
        {
            id: 5,
            name: 'Tinkoff',
            category: 'stock',
        },
        {
            id: 6,
            name: 'Rub',
            category: 'value',
        },
        {
            id: 7,
            name: 'Dollar',
            category: 'value',
        },
        {
            id: 8,
            name: 'Kek',
            category: 'other',
        },
    ]);
    let [curItems, setCurItems] = useState(items);

    useEffect( () => {
        fetchData();
    },);

    const fetchData = async () => {
        try {
            const response = await TradeService.getAllStock();
            const data = response.data;
            setItems(data);
        } catch (error) {
            console.error(error);
        }
    };
    function chooseCategory(category) {
        if (category === 'all') {
            setCurItems(items);
            return;
        }
        setCurItems(items.filter(el => el.category === category));
    }

    return (
        <div>
            <Category chooseCategory={chooseCategory}/>
            <List items={curItems} />
        </div>
    )
}