import React from 'react';
import { connect } from 'react-redux';
import CartComponent from './CartComponent';
import data from '../../data/data';
import CartSubmitForm from './CartSubmitForm';
import { Switch, Route } from 'react-router-dom';




class CartContainer extends React.Component{

  constructor(props){
    super(props);
    
    if (window.localStorage.getItem('my')&& Object.keys(window.localStorage.getItem('my')).length!==0){
      this.props.setStor({type:"SET_TO_CART", payload:JSON.parse(window.localStorage.getItem('my'))})
    }
    if (!this.props.products.length){
      this.props.setStor({type:'SET_PRODUCTS', payload:data});
    }  
  }

  handleDeleteButton= (id)=>this.props.setStor({type:"RESET_PRODUCTS_INTO_CART", payload:id})
  handleAllPrice= ()=>{
    let all= 0;
    for (let i in this.props.productsID){ 
      all+=this.props.products.filter((it)=>it.id===Number(i))[0].price*this.props.productsID[i];
    }
    return all;
  }

    render(){      
      
      return(
        <Switch>
          <Route exact path="/cart/confirm" component={CartSubmitForm}/>
          <CartComponent 
            products={this.props.products.filter((item)=> item.id in this.props.productsID)}
            handleDeleteButton={this.handleDeleteButton}
            productsID={this.props.productsID}
            setStor={this.props.setStor}
            allPrice={this.handleAllPrice()}
          />  
        </Switch>      
      )
    }
}




const mapStateToProps= (state)=>{
    return{
      productsID: state.cartReducer.productsID,       
      products: state.productReducer.products, 
 
    }
};

const mapDispatchToProps= (dispatch)=>{
    return {
        setStor: (item)=>dispatch(item)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);


