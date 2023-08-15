import React,{useState,ChangeEvent,FormEvent} from 'react'
import {useParams} from 'react-router-dom'
import { iProduct } from '../../types/Products'

type Props ={
    products:iProduct[]
    onUpdate:(product:iProduct)=>void
}

const UpdatePage = ({products,onUpdate}:Props) => {
    const {id}=useParams()
    const currentProduct = products.find(item=>item.id == Number(id))
    const [inputValues,setInputValues] = useState({})
    const onHandleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        const data = {...inputValues,[name]:value,"id":Number(id)}
        setInputValues(data)
    }
    const onHandleSubmit = (event:FormEvent)=>{
        event.preventDefault()
        onUpdate(inputValues)
        window.alert('Update Successfully')
    }
  return (
    <div>
        <form action="" onSubmit={onHandleSubmit}>
            <input type="text" name='name' placeholder='Enter Name Update' onChange={onHandleChange} defaultValue={currentProduct?.name}/>
            <input type="text" name='image' placeholder='Enter Image Update' onChange={onHandleChange} defaultValue={currentProduct?.image}/>
            <input type="text" name='price' placeholder='Enter Price Update' onChange={onHandleChange} defaultValue={currentProduct?.price}/>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdatePage