import React, { createContext, useEffect, useState } from 'react'



export const userContext = createContext()


const Context = ({ children }) => {
  const [cart, setCart] = useState({ id: "00" });


  const [total, setTotal] = useState([])
  console.log("4")
  useEffect(() => {
    // for (let i = 0; i <= total.length; i++) {

      // if (total[i] == undefined || total[i].id !== cart.id) {
      //   console.log("lklkl")
      // } else {
        
      // }
    // }
      setTotal(total => [...total, cart]);
      console.log(total, cart.id) 
    // console.log("total=> ",total[0])
  }, [cart]);
  // console.log(total)
  return (
    <userContext.Provider value={{ cart, setCart, total, setTotal }}>{children}</userContext.Provider>
    // <userContext.Provider value="usama">{children}</userContext.Provider>

  )
}
export default Context




