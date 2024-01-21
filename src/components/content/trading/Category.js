import {useEffect, useState} from "react";
import TradeService from "../../../api/api.trade";

export function Category(props) {
    const [category, setCategory] = useState([
        {
            key: 'all',
            name: 'Все',
        },
        {
            key: 'stock',
            name: 'Акции',
        },
        {
            key: 'value',
            name: 'Валюта',
        },
        {
            key: 'other',
            name: 'Другое',
        }
    ]);

    useEffect( () => {
        fetchData();
    },);

    const fetchData = async () => {
        try {
            const response = await TradeService.getCategory();
            const data = response.data;
            setCategory(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={'category'}>
            {category.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}