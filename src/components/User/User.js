import React from 'react';
import './user.css'

const User = () => {
    return (
        <div className={"user-card w-h-full"}>
            <div className={"card-title"}>

                <img src={"profile.jpeg"} alt={"enes"}/>
                <h1>Enes Şahin</h1>
            </div>
            <div className={"card-title"}></div>
            <div className={"card-footer"}>
                <h1>Total Money : 100.000.000 $</h1>
            </div>

        </div>
    );
};

export default User;
