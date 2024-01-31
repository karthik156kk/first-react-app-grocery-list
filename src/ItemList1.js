import React from 'react'
import LineItems from './LineItems';
function ItemList1({items, handleCheck, handleDelete}) {
  return (
    <ul>
        {items.map((it) => (
            <LineItems 
            key={it.id}
            it={it}
            handleCheck={handleCheck} 
            handleDelete={handleDelete}/>
        ))}
    </ul>
  )
}

export default ItemList1