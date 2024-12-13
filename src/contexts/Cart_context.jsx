import React, { createContext, useState, useContext } from 'react';
import vanilla from '../assets/ice-vanilla.png'
import strawberry from '../assets/ice-strawberry.png'
import chocolate from '../assets/ice-chocolate.png'
import mint from '../assets/ice-mint-chocolate-chip.png'
import cookies from '../assets/ice-cookiescream.png'
import caramal from '../assets/ice-caramel.png'



const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: "vanilla Delight",
        price: "₹49",
        image: vanilla,
        description: "Classic vanilla ice cream topped with fresh cream.",
      },
      {
        id: 2,
        name: "Strawberry",
        price: "₹99",
        image: strawberry,
        description: "Fresh and fruity strawberry ice cream made with real strawberries.",
      },
      {
        id: 3,
        name: "Chocolate",
        price: "₹79",
        image: chocolate,
        description: "Rich and smooth chocolate ice cream made with premium cocoa.",
      },
      {
        id: 4,
        name: "Mint Chocolate Chip",
        price: "₹199",
        image: mint,
        description: "Refreshing mint ice cream with delicious chocolate chips.",
      },
      {
        id: 5,
        name: "Mint Chocolate Chip",
        price: "₹119",
        image: cookies,
        description: "Creamy ice cream with chunks of chocolate cookies.",
      },
      {
        id: 6,
        name: "Caramel",
        price: "₹149",
        image: caramal,
        description: "Smooth caramel ice cream with a rich caramel swirl.",
      },
    ]);
    
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          {children}
        </CartContext.Provider>
      );
    };
    
    export default CartProvider;  