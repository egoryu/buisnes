
import React from "react";
import {StockItem} from "./StockItem";
import {StockTable} from "./StockTable";

export function StockList(props) {
    let category = props.items.reduce((acc, val) => {
        if (!acc.includes(val.category)) {
            acc.push(val.category);
        }
        return acc;
    }, []);

    return (
        <div>
            {category.map(el => (
                <div className={"stockList"}>
                    <h2>{el}</h2>
                    <StockTable items={props.items.filter(it => it.category === el)}/>
                </div>
                ))
            }
        </div>
    )
}