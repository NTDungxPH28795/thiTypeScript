import React,{useState,useEffect} from 'react'
import { iProduct } from '../../types/Products'
import {Link} from 'react-router-dom'

type Props ={
    products:iProduct[],
    onRemove: (id:number)=>void
}

const AdminProductPage = ({products,onRemove}:Props) => {
    const [data,setData]= useState<iProduct[]>([])
    useEffect(()=>{
        setData(products)
    },[products])
    const onHandleRemove = (id:number)=>{
        onRemove(id)
    }
  return (
    <div>
        <h1>Admin Product Page</h1>
        <Link to={'/admin/products/add'}><button>Add New Product</button></Link>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Product Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td><img src={item.image} alt="" /></td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=> onHandleRemove(item.id)}>Delete</button>
                                    <Link to={`/admin/products/${item.id}/update`}><button>Update</button></Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AdminProductPage