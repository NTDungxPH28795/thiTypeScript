import React from 'react'
import { iProduct } from '../types/Products'
import {useParams} from 'react-router-dom'

type Props={
    products: iProduct[]
}

const DetailProductPage = ({products}:Props) => {
    const {id}= useParams()
    const currentProduct = products.find((item)=> item.id == Number(id))
  return (
    <div>
        <h1>Detail Page</h1>
        <img src={currentProduct?.image} alt="" />
        <h3>{currentProduct?.name}</h3>
        <p>{currentProduct?.price}</p>
    </div>
  )
}

export default DetailProductPage