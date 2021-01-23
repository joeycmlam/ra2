import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import ProductHOC from "./components/Product/ProductHOC";
import ProductRender from "./components/Product/ProductRender";
import ProductSearchBar from "./components/Product/ProductSearchBar";
import Menu from "./components/Menu/Menu";
import ProductC from "./components/Product/ProductC";
import ProductContext from "./components/Product/ProductContext";

function App() {

    const products = [
        { imageSrc: '008.jpg', name: '008'},
        { imageSrc: 'IMG_1178.jpg', name: 'IMG_1178'},
        { imageSrc: 'Kampot+Image-3.png', name: 'Kampot Image'},
        { imageSrc: 'mask_etak_04_c.jpg', name: 'Mask Etak'}
    ];


  return (
    <div className="App">
      <Header/>
      <Menu/>
        <ProductContext.Provider value={products}>
            <ProductSearchBar/>
            <ProductC/>
        </ProductContext.Provider>
      <h2>footer</h2>
    </div>
  );
}

export default App;
