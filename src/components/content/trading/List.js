import {Item} from "./Item";
import {Link} from "react-router-dom";

export function List(props) {
    return (
        <main>
            {props.items.map(el => (
                <Item key={el.id} item={el}/>
            ))}
        </main>
    )
}