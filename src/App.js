import './index.css'
import Basket from "./components/Basket/Basket";
import ProductCard from "./components/Product/ProductCard";
import User from "./components/User/User";


function App() {
  return (
    <div className="body">
        <div className={"container"}>
            <User></User>
            <div className={"product-list"}>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
            <Basket></Basket>
        </div>

    </div>
  );
}

export default App;
