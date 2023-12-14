
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function ProdContextProvider({children}) {
  const [medsDet,setMedsDet] = useState([]);
  const [cartArray,setCartArray] = useState([]);

  const storeMedicine = (newMeds)=>{
    setMedsDet([...medsDet,newMeds])
  }
  const storeProductInCart = (prod)=>{
    // console.log("product inside storeProductInCart",prod);
    setCartArray(prevProd => [...prevProd,prod])
  }
  // console.log("CartArray is",cartArray);

  const context = {
    medsDet:medsDet,
    setMedsDet:setMedsDet,
    storeMedicineFun:storeMedicine,
    cartArray:cartArray,
    storeProductInCart:storeProductInCart
  }
  // console.log("value of medsDet inside prodcontex",medsDet);


  return( <CartContext.Provider value={context}>{children}</CartContext.Provider>)
}
