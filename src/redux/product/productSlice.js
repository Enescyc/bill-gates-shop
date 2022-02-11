import {createSlice} from '@reduxjs/toolkit'


export const productSlice = createSlice({
    name: "product",
    initialState: [

        {
            id: 1,
            name: "Big Mac",
            price: 10,
            src: "burger.jpeg"
        },
        {
            id: 2,
            name: "History Supreme",
            price: 25000000000,
            src: "History-Supreme.jpeg"
        },
        {
            id: 3,
            name: "Villa Aurora",
            price: 45000000,
            src: "Villa-Aurora.jpg"
        },
        {
            id: 4,
            name: "Führer",
            price: 250000,
            src: "tabanca.jpeg"
        },
        {
            id: 5,
            name: "Graff Diamonds",
            price: 1000000,
            src: "Graff-Diamonds.jpg"
        },
        {
            id: 6,
            name: "Kids Menu",
            price: 1,
            src: "burger.jpeg"
        },

    ]
})

export default productSlice.reducer;