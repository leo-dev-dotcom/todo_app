import React from 'react'
import ItemForm from './ItemForm'

function ItemList(props) {
    const saveItemsData = (enteredItemsData) => {
        const ItemsData = {
            ...enteredItemsData,
            id: Math.random().toString(),
        };
        props.onAddItems(ItemsData);
    };
    return (
        <div>
            <ItemForm onSaveItemsData={saveItemsData} />
        </div>
    )
}

export default ItemList
