
const initialState ={
    products:[],
    loading:true,
};


const productReducer= (state= initialState , action)=>{
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                loading: false,
            };    
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: [...state.products, action.payload],
            }; 
        case "RESET_PRODUCTS":
            return {
                ...state,
                products: [...state.products].filter((item)=>item.id!==action.payload),
                
            }; 
        default:
            return state;
    }
}


export default productReducer;