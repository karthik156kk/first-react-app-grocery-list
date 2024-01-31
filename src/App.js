import logo from './logo.svg';
import './App.css';
//can edit the functional components
function App() {
  const name = 'karthik';
  const handleNameChange = () => {
    const names = ['karthik', 'arjun', 'kausik'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    // return JsX = Javascript + XML
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes what I change.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{true}</p> 
        <p>hello {name}</p>
        <p>{handleNameChange()}</p>
      </header>
    </div>
  );
}
//cannot render boolean and objects

export default App;
