import { createContext } from 'react';

export const CartContext = createContext();

// import { useLocalStorage } from '../hooks/useLocalStorage';

// export const CartContext = createContext();

// export const CartContextProvider = props => {
//     const [cart, setCart] = useLocalStorage("cartItems", []);

// 	const addItem = item => {
// 		setCart([...cart, item]);
//     };

//     const removeItem = itemToRemove => {
//         const filteredCart = cart.filter(cartItem => {
//             return itemToRemove.id !== cartItem.id;
//         })

//         setCart(filteredCart);
//     }
//     return (
//         <CartContext.Provider value={{ cart, setCart, addItem, removeItem }}>
//             {props.children}
//         </CartContext.Provider>
//     );
// }