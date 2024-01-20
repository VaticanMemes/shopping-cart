// import { useState, createContext, useEffect } from 'react';

// // eslint-disable-next-line react-hooks/rules-of-hooks
// useEffect(() => {
//   fakeStoreAPI()
// }, [])

// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [items, setItems] = useState([]);

// async function fakeStoreAPI() {
//   fetch('https://fakestoreapi.com/products')
//       .then(res=>res.json())
//       .then(json=>setItems(json))
// }
// // async function newFakeStoreAPI() {
// //     fetch('https://fakestoreapi.com/products')
// //         .then(res=>{
// //           return res.json().then((data) => {
// //             // console.log(data);
// //             // return data;
// //           }).catch((err) => {
// //             console.log(err);
// //           })
// //         })
// // }

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   // console.log(storeItems)
//   for (let i = 1; i < items.length + 1; i++) {
//     cart[i] = 0;
//   }
//   console.log(cart)
//   return cart;
// };

// export const ShopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart());
  
//     // const getTotalCartAmount = () => {
//     //   let totalAmount = 0;
//     //   for (const item in cartItems) {
//     //     if (cartItems[item] > 0) {
//     //       let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
//     //       totalAmount += cartItems[item] * itemInfo.price;
//     //     }
//     //   }
//     //   return totalAmount;
//     // };

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//       };
    
//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     };

//     const contextValue = {
//         cartItems,
//         addToCart,
//         removeFromCart,
//       };

//     return (
//         <ShopContext.Provider value={contextValue}>
//           {/* eslint-disable-next-line react/prop-types */}
//           {props.children}
//         </ShopContext.Provider>
//       );
// }    

// // export default function ShopContextProvider(props) {
// //     {
// //         const [cartItems, setCartItems] = useState(getDefaultCart())

// //         const addToCart = (itemId) => {
// //             setCartItems((prev => ({...prev, [itemId]: prev[itemId] + 1})))
// //         }
        
// //         const removeFromCart = (itemId) => {
// //             setCartItems((prev => ({...prev, [itemId]: prev[itemId] - 1})))
// //         }

// //         const contextValue = { cartItems, addToCart, removeFromCart}

// //         return (
// //             <ShopContextProvider.Provider value={contextValue}>
// //                 {props.children}
// //             </ShopContextProvider.Provider>
// //         )
// //     }
// // }
// // const getDefaultCart = () => {
// //     const storeItems = newFakeStoreAPI()
// //     let cart = {}
// //     for (let i = 0; i < storeItems.length; i++) {
// //         cart[i] = 0;
// //     }
// //     return cart;
// // }