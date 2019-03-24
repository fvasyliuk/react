const initialState ={
    productsID: {},
    
};


const cartReducer= (state= initialState , action)=>{
    switch (action.type) {                   
        case "ADD_TO_CART":  
            const newProductsID= {...state.productsID};  
            newProductsID[action.payload]=1      
            return {
                ...state,
                productsID: newProductsID,
            }; 
        case "SET_TO_CART":   
            return {
                ...state,
                productsID: action.payload,
            }; 
        case "RESET_PRODUCTS_INTO_CART":
            const productsID= {...state.productsID};
            delete productsID[action.payload];
            return {
                ...state,
                productsID,
            }; 
        case "INCREMENT_COUNT":  
            const newINCountProductsID= {...state.productsID};  
            newINCountProductsID[action.payload]+=1 ;               
            return {
                ...state,
                productsID: newINCountProductsID,
            }; 
        case "DECREMENT_COUNT":  
            const newDECountProductsID= {...state.productsID};  
            newDECountProductsID[action.payload]-=1 ;    
            return {
                ...state,
                productsID: newDECountProductsID,
            }; 
        case "SET_COUNT":  
            const newSetCountProductsID= {...state.productsID};  
            newSetCountProductsID[action.payload.key]= action.payload.value;    
            return {
                ...state,
                productsID: newSetCountProductsID,
            }; 
        default:
            return state;
    }
}


export default cartReducer;