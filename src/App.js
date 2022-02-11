import './index.css'
import Basket from "./components/Basket/Basket";
import User from "./components/User/User";
import ProductList from "./components/Product-List/ProductList";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="body">
        <User></User>
        <div className={"container"}>
            <ProductList></ProductList>
            <Basket></Basket>
            <Footer></Footer>
        </div>

    </div>
  );
}

export default App;
