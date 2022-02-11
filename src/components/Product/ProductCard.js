import React, {useEffect, useState} from 'react';
import './product.css'
import {useDispatch} from "react-redux";
import {nanoid} from "nanoid";
import {updateBasket, deleteBasket} from "../../redux/basket/basketSlice";

const ProductCard = ({items}) => {
    const dispatch = useDispatch();


    const [basketItem, setBasketItem] = useState({
        id:nanoid(),
        count:0,
        price:items.price,
        name:items.name,
    })

    const handleChange = (e) => {
        let copyBasketItem = {...basketItem}
        copyBasketItem.count=Number(e.target.value);
        setBasketItem(copyBasketItem);
    }
    useEffect(()=> {
        console.log(basketItem)
    },[basketItem])


    return (
        <div className={"card"}>
            <div className={"card-title"}>
                <img alt={items.name} src={items.src} className={"img"}></img>
                <h3 className={"title"}>{items.name}</h3>
                <h2 className={"title"}>{items.price.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}</h2>
            </div>
            <div className={"card-body"}>
                <button onClick={()=> dispatch(deleteBasket(basketItem))} className={"btn btn-sell"}>Sell</button>
                <input onChange={handleChange} name="count" min={"1"} max={"99"} type={"number"}/>
                <button onClick={()=> dispatch(updateBasket(basketItem))} className={"btn btn-buy"}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;
