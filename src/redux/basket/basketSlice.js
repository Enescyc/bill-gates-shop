import {createSlice} from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        items: [],
        totalPrice: 0,
        accountBalance: 1000000000000,
    },
    reducers: {
        updateBasket: (state, action) => {


            if ((state.accountBalance - (action.payload.count * action.payload.price)) >= state.totalPrice) {
                if (action.payload.count <= 0) {
                    alert('You cant buy ' + action.payload.count)
                    state.totalPrice = 0;
                } else {
                    let item = state.items.find(item => item.id === action.payload.id);
                    if (!item) state.items.push(action.payload)
                    else {
                        item.count += action.payload.count;
                        state.totalPrice += item.count * item.price;
                    }
                    let total = 0;
                    state.items.map(item => total += item.count * item.price)
                    state.totalPrice = total;
                }
            } else {
                alert("Your balance is not enough");
            }


        },
        deleteBasket: (state, action) => {
            const item = state.items.find(value => value.id === action.payload.id);
            if (item && action.payload.count > 0 && item.count >= action.payload.count) {
                item.count -= action.payload.count
                let total = 0;
                state.items.map(item => total += item.count * item.price)
                state.totalPrice = total;
            } else alert("You cant sell " + action.payload.count)

            if (item.count === 0) {
                state.items = state.items.filter(items => items.id !== item.id)
            }


        },
        setTotalPrice: (state, action) => {

        },
    }
})


export const {updateBasket, setTotalPrice, deleteBasket} = basketSlice.actions;
export default basketSlice.reducer;
