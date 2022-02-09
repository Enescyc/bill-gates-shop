import React from 'react';
import './basket.css'
const Basket = () => {
    return (
        <div className={"basket"}>
            <div className={"basket-title"}>Your Receipt</div>
            <div className={"basket-body"}>
                <table>
                    <tr>
                        <th>Item </th>
                        <th>Count</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Maden Suyu</td>
                        <td>2 Adet</td>
                        <td>5 TL</td>
                    </tr>
                    <tr>
                        <td>Coca Cola</td>
                        <td>2 Adet</td>
                        <td>5 TL</td>
                    </tr>
                </table>
            </div>
            <div className={"basket-footer"}>
                <h3>Total Price</h3>
                <h3>10 TL</h3>
            </div>

        </div>
    );
};

export default Basket;
