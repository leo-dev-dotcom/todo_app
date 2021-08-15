import React from 'react'
import Items from './Items'

function AddList(props) {
    let viewItems = props.items.map((items) => {
        return <Items
            item={items.item}
            status={items.status}
            key={items.id}
        />
    })
    return (
        <div>
            {viewItems}
        </div>
    )
}

export default AddList
