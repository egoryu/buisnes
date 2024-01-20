import {Category} from "../trading/Category";
import React, {useState} from "react";
import {StockList} from "./StockList";

export function Portfolio() {
    let items=[
        {
            id: 1,
            name: 'Ozon',
            category: 'stock',
            value: 23.3,
            amount: 10,
        },
        {
            id: 2,
            name: 'Yandex',
            category: 'stock',
            value: 23.3,
            amount: 10,
        },
        {
            id: 3,
            name: 'Google',
            category: 'stock',
            value: 23.3,
            amount: 10,
        },
        {
            id: 4,
            name: 'Vk',
            category: 'stock',
            value: 23.3,
            amount: 10,
        },
        {
            id: 5,
            name: 'Tinkoff',
            category: 'stock',
            value: 23.3,
            amount: 10,
        },
        {
            id: 6,
            name: 'Rub',
            category: 'value',
            value: 23.3,
            amount: 10,
        },
        {
            id: 7,
            name: 'Dollar',
            category: 'value',
            value: 23.3,
            amount: 10,
        },
        {
            id: 8,
            name: 'Kek',
            category: 'other',
            value: 23.3,
            amount: 10,
        },

    ]

    let [curItems, setCurItems] = useState(items);
    function chooseCategory(category) {
        if (category === 'all') {
            setCurItems(items);
            return;
        }
        setCurItems(items.filter(el => el.category === category));
    }

    return (
        <div>
            <Category className={'category'} chooseCategory={chooseCategory}/>
            <StockList items={curItems}/>
        </div>
    )
}