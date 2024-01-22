import {Category} from "../trading/Category";
import React, {useEffect, useState} from "react";
import {StockList} from "./StockList";
import ProfileService from "../../../api/api.profile";

export function Portfolio() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Ozon',
            category_id: 2,
            category_name: 'Shares',
            value: 23.3,
            amount: 10,
        },
        {
            id: 2,
            name: 'Yandex',
            category_id: 2,
            category_name: 'Shares',
            value: 23.3,
            amount: 10,
        },
        {
            id: 3,
            name: 'Google',
            category_id: 2,
            category_name: 'Shares',
            value: 23.3,
            amount: 10,
        },
        {
            id: 4,
            name: 'Vk',
            category_id: 2,
            category_name: 'Shares',
            value: 23.3,
            amount: 10,
        },
        {
            id: 5,
            name: 'Tinkoff',
            category_id: 2,
            category_name: 'Shares',
            value: 23.3,
            amount: 10,
        },
        {
            id: 6,
            name: 'Rub',
            category_id: 3,
            category_name: 'Currencies',
            value: 23.3,
            amount: 10,
        },
        {
            id: 7,
            name: 'Dollar',
            category_id: 3,
            category_name: 'Currencies',
            value: 23.3,
            amount: 10,
        },
        {
            id: 8,
            name: 'Kek',
            category_id: 4,
            category_name: 'Other',
            value: 23.3,
            amount: 10,
        },
    ]);

    let [curItems, setCurItems] = useState(items);

    useEffect(() => {
        fetchData();
    });
    const fetchData = async () => {
        try {
            const response = await ProfileService.getPortfolioData();
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
        }
    };
    function chooseCategory(category_id) {
        if (category_id === 0) {
            setCurItems(items);
            return;
        }
        setCurItems(items.filter(el => el.category_id === category_id));
    }

    return (
        <div>
            <Category className={'category'} chooseCategory={chooseCategory}/>
            <StockList items={curItems}/>
        </div>
    )
}