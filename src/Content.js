import {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'one half pound bag of cocoa covered almonds unsalted'
        },
        {
            id: 2,
            checked: true,
            item: 'item 2'
        },
        {
            id: 3,
            checked: false,
            item: 'item 3'
        },
    ]);
    const handleCheck = (id) => {
        const listItems = items.map((it)=>{
            if(it.id === id){
                return {...it, checked: !it.checked}
            }else{
                return it;
            }
        })
        setItems(listItems);
        localStorage.setItem('myShoppingList', JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
        const listItems = items.filter((it) => it.id !== id);
        setItems(listItems);
        localStorage.setItem('myShoppingList', JSON.stringify(listItems));
    }
    return (
        <main>
            {items.length? 
                (<ul>
                    {items.map((it) => (
                        <li className="item" key={it.id}>
                            <input type="checkbox" checked={it.checked} onChange={() => handleCheck(it.id)}></input>
                            <label onDoubleClick={()=>handleCheck(it.id)} style={it.checked ? {textDecoration: 'line-through'}: null}>{it.item}</label>
                            <FaTrashAlt role='button' tabIndex="0" onClick={()=>handleDelete(it.id)} />
                        </li>
                    ))}
                </ul>):
                (
                    <p style={{marginTop: '2rem'}}>Your list is empty</p>
                )
            }
        </main>
    )
}

export default Content