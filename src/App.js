import './App.css';
import Content from './Content';
import Header1 from './Header1';
import Footer from './Footer';
//can edit the functional components
function App() {
  return (
    // return JsX = Javascript + XML
    <div className="App">
      <Header1 />
      <Content />
      <Footer />
    </div>
  );
}
//cannot render boolean and objects

export default App;
