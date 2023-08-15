import { useState,useEffect } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { addProduct, deleteProduct, listProduct, updateProduct } from './api/product'
import { iProduct, iUser } from './types/Products'
import { addUser } from './api/user'
import HomePage from './pages/Home'
import ProductPage from './pages/Product'
import DetailProductPage from './pages/DetailProduct'
import AdminProductPage from './pages/admin/Product'
import AddProductPage from './pages/admin/AddProduct'
import UpdatePage from './pages/admin/Update'

function App() {
  const navigate = useNavigate()
  const [products,setProducts]= useState([])
  useEffect(()=>{
    listProduct().then(({data})=>setProducts(data))
  },[])
  const onRemove = (id:Number)=>{
    deleteProduct(id).then(()=>setProducts(products.filter((item:iProduct)=> item.id !=id)))
  }
  const onAdd= (product:iProduct)=>{
    addProduct(product).then(()=>{
      listProduct().then(({data})=>{
        setProducts(data)
        navigate(`/admin/products`)
      })
    })
  }
  const onUpdate= (product:iProduct)=>{
    updateProduct(product).then(()=>{
      listProduct().then(({data})=>{
        setProducts(data)
        navigate(`/admin/products`)
      })
    })
  }
  const onAddUser =(user:iUser)=>{
    addUser(user)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products}/>}/>
        <Route path='/products' element={<ProductPage products={products}/>}/>
        <Route path='/products/:id' element={<DetailProductPage products={products}/>}/>
        <Route path='/admin/products' element={<AdminProductPage products={products} onRemove={onRemove}/>}/>
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onAdd}/>}/>
        <Route path='/admin/products/:id/update' element={<UpdatePage products={products} onUpdate={onUpdate}/>}/>
      </Routes>
    </>
  )
}

export default App
