import {useEffect, useState} from "react";
import TradeService from "../../../api/api.trade";

export function Category(props) {
    const [category, setCategory] = useState([
        {
            Id: 0,
            Name: 'All',
        },
        {
            Id: 2,
            Name: 'Shares',
        },
        {
            Id: 3,
            Name: 'Currencies',
        },
        {
            Id: 4,
            Name: 'Other',
        }
    ]);

    useEffect( () => {
        fetchData();
    },);

    const fetchData = async () => {
        try {
            const response = await TradeService.getCategory();
            const data = response.json();
            setCategory(data.categories);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={'category'}>
            {category.map(el => (
                <div key={el.Id} onClick={() => props.chooseCategory(el.Id)}>{el.Name}</div>
            ))}
        </div>
    )
}