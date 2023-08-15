import React, {FormEvent, useState} from 'react'
import { iProduct } from '../../types/Products'

type Props ={
    onAdd:(product:iProduct)=>void
}

const AddProductPage = ({onAdd}:Props) => {
    const [inputValues,setInputValues]= useState({id:0,name:"",image:"",price:0})
    const onHandleChange = (event:FormEvent)=>{
        const {name,value}:any= event.target;
        const data = {...inputValues,[name]:value}
        setInputValues(data)
    }
    const onHandleSubmit = (event:FormEvent)=>{
        event.preventDefault();
        onAdd(inputValues)
        window.alert('Create successfully')
    }
  return (
    <div>
        <h1>Add Product</h1>
        <form action="" onSubmit={onHandleSubmit}>
            <input type="text" name='name' placeholder='Enter Product Name' onChange={onHandleChange}/>
            <input type="text" name='image' placeholder='Enter Product Image' onChange={onHandleChange}/>
            <input type="text" name='price' placeholder='Enter Product price' onChange={onHandleChange}/>
            <button type='submit'>Add New</button>
        </form>
    </div>
  )
}

export default AddProductPage