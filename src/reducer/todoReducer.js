const initialData = {
    list: []
}


const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADDTODO':
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case 'DELETE':
            const newList = state.list.filter((obj) => obj.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case 'REMOVE_All':
            return {
                ...state,
                list: []
            }

        default: return state
    }


}

export default todoReducer;