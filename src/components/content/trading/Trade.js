import {List} from "./List";
import "../../../style/trade.css"
import React, {useState} from "react";
import {Category} from "./Category";

export function Trade() {
    let items=[
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
            <Category chooseCategory={chooseCategory}/>
            <List items={curItems} />
        </div>
    )
}