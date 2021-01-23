import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header/>
      <h2>menu</h2>
      <h2>searchbar</h2>
      <Product/>
      <h2>footer</h2>
    </div>
  );
}

export default App;
