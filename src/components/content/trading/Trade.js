import {List} from "./List";
import "../../../style/trade.css"
import React, {useEffect, useState} from "react";
import {Category} from "./Category";
import TradeService from "../../../api/api.trade";

export function Trade() {
    const [items, setItems] = useState([
        {
            Id: 1,
            Name: 'Ozon',
            category_id: 2,
        },
        {
            Id: 2,
            Name: 'Yandex',
            category_id: 2,
        },
        {
            Id: 3,
            Name: 'Google',
            category_id: 2,
        },
        {
            Id: 4,
            Name: 'Vk',
            category_id: 2,
        },
        {
            Id: 5,
            Name: 'Tinkoff',
            category_id: 2,
        },
        {
            Id: 6,
            Name: 'Rub',
            category_id: 3,
        },
        {
            Id: 7,
            Name: 'Dollar',
            category_id: 3,
        },
        {
            Id: 8,
            Name: 'Kek',
            category_id: 4,
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
        if (category === 0) {
            setCurItems(items);
            return;
        }
        setCurItems(items.filter(el => el.category_id === category));
    }

    return (
        <div>
            <Category chooseCategory={chooseCategory}/>
            <List items={curItems} />
        </div>
    )
}