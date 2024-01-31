import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
function LineItems({it, handleCheck, handleDelete}) {
  return (
    <li className="item" key={it.id}>
        <input type="checkbox" 
                checked={it.checked} 
                onChange={() => handleCheck(it.id)}>
        </input>
        <label onDoubleClick={()=>handleCheck(it.id)} 
                style={it.checked ? {textDecoration: 'line-through'}: null}>
            {it.item}
        </label>
        <FaTrashAlt role='button' 
                    tabIndex="0" 
                    onClick={()=>handleDelete(it.id)} 
                    aria-label = {`Delete ${it.item}`}
        />
    </li>
  )
}

export default LineItems