import Content from './Content';
import Header1 from './Header1';
import Footer from './Footer';
import {useState} from 'react'
//can edit the functional components
function App() {
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
    // return JsX = Javascript + XML
    <div className="App">
      <Header1 title="Grocery list" />
      <Content items={items} setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}
//cannot render boolean and objects

export default App;
