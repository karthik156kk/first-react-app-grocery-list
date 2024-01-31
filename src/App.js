import Content from './Content';
import SearchItem from './SearchItem';
import AddItems from './AddItems';
import Header1 from './Header1';
import Footer from './Footer';
import {useState, useEffect} from 'react';
//can edit the functional components
function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

/*   console.log('hi');
  useEffect(()=>{console.log('inside render')}, [items]);
  //last of every specified render dependency state changes
  console.log('hello'); */

  useEffect(()=>{
    JSON.stringify(items);
  }, [items])
  
  const [newItems, setNewItems] = useState('');
  const [search, setSearch] = useState('');
  
  const addItem = (newItems) => {
    const id = items.length ? items[items.length-1].id+1 : 1;
    const myNewItem = {id, checked:false, item: newItems};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  
  const handleCheck = (id) => {
    const listItems = items.map((it)=>{
        if(it.id === id){
            return {...it, checked: !it.checked}
        }else{
            return it;
        }
    })
    setItems(listItems);
  }
  
  const handleDelete = (id) => {
      const listItems = items.filter((it) => it.id !== id);
      setItems(listItems);
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItems) return;
    addItem(newItems);
    setNewItems('');
  }
  
  return (
    // return JsX = Javascript + XML
    <div className="App">
      <Header1 title="Grocery list" z/>
      <SearchItem 
        search={search}
        setSearch={setSearch}
        />
      <AddItems 
        newItems = {newItems}
        setNewItems = {setNewItems}
        handleSubmit = {handleSubmit}
      />
      <Content items={items.filter(it => it.item.toLowerCase().includes(search.toLowerCase()))} setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}
//cannot render boolean and objects

export default App;
