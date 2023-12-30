export function Category(props) {
    let category = [
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
    ]
    return (
        <div className={'category'}>
            {category.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}