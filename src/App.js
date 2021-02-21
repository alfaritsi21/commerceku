import './App.css';
import './App.scss';
import 'antd/dist/antd.css';
import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";



function App() {
  return (
    <div className="container">
      <Header />
      {/* <ProductList /> */}
      {/* <ProductDetail /> */}
      <Cart />
    </div>
  );
}

export default App;
