import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../productItem/ProductItem';
import { Card } from 'semantic-ui-react';



class ProductsList extends React.Component{

    // constructor(props){
    //     super(props);
        
    // // fetch('http://localhost:3001/api/v1/questions')
    // // .then(response => response.json())
    // // .then(json => this.props.setStor({type:'SET_PRODUCTS', payload:json.question}))

    // // this.props.setStor({type:'SET_PRODUCTS', payload:data})
    // //db(this.props.setStor);
    // }
 

    // componentDidMount(){
    //     fetch('http://localhost:3001/api/v1/questions')
    //     .then(response => response.json())
    //     .then(json => this.props.setStor({type:'SET_PRODUCTS', payload:json.question}))
    // }

    render(){        
        if (this.props.loading){
            return (<p>loading...</p>);
        }
        let productList
        !this.props.filter?productList= this.props.products:
        productList= this.props.products.filter((item)=>item.category === this.props.filter)
        return(
            <div>                   
                <Card.Group itemsPerRow={3}>  
                                                     
                    {productList                      
                        .map((item)=>
                            <ProductItem 
                                key= {item.id}
                                item= {{...item}}
                                handleAddButton= {this.props.setStor}
                            />
                        )
                    }
                    
                </Card.Group>                                                               
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return{
        products: state.productReducer.products,        
        productsID: state.cartReducer.productsID,
        loading: state.productReducer.loading,
    }
};

const mapDispatchToProps= (dispatch)=>{
    return {
        setStor: (item)=>dispatch(item)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsList);