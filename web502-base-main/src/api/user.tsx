import instance from "./instance"

export const addUser = (user)=>{
    return instance.post('/users',user)
}
export const listRole = ()=>{
    return instance.get('/roles')
}