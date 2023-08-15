import React from 'react'
import { iProduct } from '../types/Products'

type Props ={
    products:iProduct[]
}

const HomePage = ({products}:Props) => {
  return (
    <div>
        <h1>Home Page</h1>
        {
            products.map((item,index)=>{
                return(
                    <div key={index+1}>
                        <img src={item.image} alt="" />
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default HomePage