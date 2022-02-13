import React from 'react';
import './user.css'
import {useSelector} from "react-redux";

const User = () => {
    const totalPrice = useSelector(state => state.basket.totalPrice);
    const accountBalance = useSelector(state=> state.basket.accountBalance);


    return (
        <div className={"user-card w-h-full"}>
            <div className={"user-header"}>
                <img src={"profile.jpeg"} alt={"enes"} className={"user-img"}/>
                <h1>Spend Bill Gate's Money</h1>
            </div>
            <div className={"user-footer"}>
                <h1>Total Money : {(accountBalance-totalPrice).toLocaleString('us-US', {style: 'currency', currency: 'USD'})}</h1>
            </div>

        </div>
    );
};

export default User;
