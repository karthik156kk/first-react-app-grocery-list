import Content from './Content';
import SearchItem from './SearchItem';
import AddItems from './AddItems';
import Header1 from './Header1';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import apiRequest from './apiRequest';
//can edit the functional components
function App() {
const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    //create
    const fetchData = async() => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not recieve expected data')
        let listItems = await response.json();
        listItems.map((it) => it.id = +it.id);
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
  
  const addItem = async (newItems) => {
    const id = items.length ? +(items[items.length-1].id)+1 : 1;
    const myNewItem = {id, checked:false, item: newItems};
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postObj = {
      //post
      method: 'POST',
      headers:{
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(myNewItem)
    }
    const postResult = await apiRequest(API_URL, postObj);
    if(postResult) setFetchError(postResult);
  }
  
  const handleCheck = async (id) => {
    //update
    const listItems = items.map((it)=>{
        if(it.id === id){
            return {...it, checked: !it.checked}
        }else{
            return it;
        }
    })
    setItems(listItems);
    
    const myItem = listItems.filter((item) => item.id === id)
    const updateObj = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const updateResult = await apiRequest(`${API_URL}/${id}`, updateObj);
    if(updateResult) setFetchError(updateResult);
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
