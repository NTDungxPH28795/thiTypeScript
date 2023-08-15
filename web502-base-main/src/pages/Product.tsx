import React from 'react'
import { Link} from 'react-router-dom'
import { iProduct } from '../types/Products'

type Props = {
    products:iProduct[]
}

const ProductPage = ({products}:Props) => {
  return (
    <div>
        <h1>Product Page</h1>
        {
            products.map((item,index)=>{
                return(
                    <div key={index+1}>
                        <img src={item.image} alt="" />
                        <h3><Link to={`/products/${item.id}`}>{item.name}</Link></h3>
                        <p>{item.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductPage