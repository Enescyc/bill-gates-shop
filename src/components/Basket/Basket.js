import './basket.css'
import {useSelector} from "react-redux";


const Basket = () => {
    const basket = useSelector(state => state.basket.items)
    const totalPrice = useSelector(state => state.basket.totalPrice)


    return (
        <div className={"basket"}>
            <div className={"basket-title"}>Your Receipt</div>
            <div className={"basket-body"}>
                <table>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>

                    </tr>
                    </thead>

                    <tbody>
                    {basket && basket.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.count+"x"}</td>
                                <td>{item.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</td>

                            </tr>
                        )
                    })}

                    </tbody>

                </table>
            </div>
            <div className={"basket-footer"}>
                <h3>Total Price</h3>
                <h3>{totalPrice.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</h3>
            </div>

        </div>
    );
};

export default Basket;
