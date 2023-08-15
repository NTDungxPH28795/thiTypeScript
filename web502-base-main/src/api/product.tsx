import { iProduct } from "../types/Products"
import instance from "./instance"

const listProduct = ()=>{
    return instance.get('/products')
}
const addProduct = (product:iProduct)=>{
    return instance.post('/products', product)
}
const updateProduct = (product:iProduct)=>{
    return instance.patch(`/products/${product.id}`, product)
}
const deleteProduct = (id:number)=>{
    return instance.delete(`/products/${id}`)
}
export {listProduct, addProduct, updateProduct, deleteProduct}