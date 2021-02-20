import './App.css';
import './App.scss';
import 'antd/dist/antd.css';
import Header from "./components/Header";
// import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <div className="container">
      <Header />
      {/* <ProductList /> */}
      <ProductDetail />
    </div>
  );
}

export default App;
