import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";


const ProductList = () => {
    const product = useSelector((state => state.product));

    return (
        <div className={"product-list"}>
            {
                product.map(products =>{
                    return (
                        <ProductCard key={products.id} items={products}></ProductCard>
                    )
                })
            }

        </div>
    );
};

export default ProductList;
