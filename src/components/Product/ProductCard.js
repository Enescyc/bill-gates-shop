import React from 'react';
import './product.css'


const ProductCard = () => {
    return (
        <div className={"card"}>
            <div className={"card-title"}>
                <img alt={"İçerik"} src={"burger.jpeg"}></img>
                <h3 className={"title"}>Big Mac</h3>
                <h2 className={"title"}>5$</h2>
            </div>
            <div className={"card-body"}>
                <button className={"btn btn-sell"}>Sell</button>
                <input  min={1} max={99} type={"number"}/>
                <button className={"btn btn-buy"}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;
