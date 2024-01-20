
export function StockItem(props) {
    return (
        <tr key={props.item.id}>
            <td>{props.item.name}</td>
            <td>{props.item.amount}</td>
            <td>{props.item.value}</td>
            <td>{props.item.value * props.item.amount}</td>
        </tr>
    )
}