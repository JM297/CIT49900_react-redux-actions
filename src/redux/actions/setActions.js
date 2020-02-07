export const deleteItem = index =>{
    return{
        type: "DELETE_ITEM",
        index
    }
};
export const changeColor = color =>{
    return{
        type:"CHANGE_COLOR",
        color: color
    }
};
