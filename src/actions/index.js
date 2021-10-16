export const addTo = (data)=>{
    return {
        type: 'ADDTODO',
        payload:{
            id: new Date().getTime().toString(),
            data: data,
        }
    }
}

export const deleteTodd = (id)=>{
    return {
        type: 'DELETE',
        id
    }
}

export const remove = ()=>{
    return {
        type: 'REMOVE_All'
    }
}
