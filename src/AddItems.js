import React from 'react';
import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react';
const AddItems = ({newItems, setNewItems, handleSubmit})=>{
    const inputRef = useRef();
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input 
                ref={inputRef}
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add items'
                required
                value={newItems}
                onChange={(e)=>setNewItems(e.target.value)}>
            </input>
            <button
                type='submit'
                aria-label='Add Item'
                onClick={()=>inputRef.current.focus()}>
                <FaPlus></FaPlus>
            </button>
        </form>
    )
}

export default AddItems