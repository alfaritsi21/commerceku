import './App.css';
import './App.scss';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import ProductList from "./components/ProductList";


function App() {
  return (
    <div className="container">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
