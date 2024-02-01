import Content from './Content';
import SearchItem from './SearchItem';
import AddItems from './AddItems';
import Header1 from './Header1';
import Footer from './Footer';
import {useState, useEffect} from 'react';
//can edit the functional components
function App() {
const API_URL = 'http://localhost:3500/items';
//will be used in the next chapter with Fetch API data
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not recieve expected data')
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
        setIsLoading(false);
      } catch(err){
        setFetchError(err.message)
        setIsLoading(false);
      }
    }
    setTimeout(()=>{
      fetchData();
    }, 2000)
  }, [])
  
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
      <main>
        {isLoading && <p>Your list is loading</p>}

        {fetchError && <p style={{backgroundColor: 'red'}}>{fetchError}</p>}

        {!fetchError && !isLoading && <Content 
          items={items.filter(it => it.item.toLowerCase().includes(search.toLowerCase()))} 
          setItems={setItems} 
          handleCheck={handleCheck} 
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}
//cannot render boolean and objects

export default App;
