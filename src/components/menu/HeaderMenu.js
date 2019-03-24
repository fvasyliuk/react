import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Menu.css';


class HeaderMenu extends Component {
  

  constructor(props){
    super(props);

    this.state = {activeItem: 'Головна'};   
  }

  componentDidMount(){    
    if (window.localStorage.getItem('my')&& Object.keys(window.localStorage.getItem('my')).length!==0){
      this.props.setStor({type:"SET_TO_CART", payload:JSON.parse(window.localStorage.getItem('my'))});      
    } 
    if (this.props.products.length===0)
    fetch('http://localhost:3001/api/v1/questions')
        .then(response => response.json())
        .then(json => this.props.setStor({type:'SET_PRODUCTS', payload:json.question}))
  }

  
  handleAllPrice= ()=>{
    let all= 0;
    
    if (Object.keys(this.props.productsID).length!==0){          
      for (let i in this.props.productsID){               
        all+= this.props.products.find((it)=>+it.id===+i)['price']*this.props.productsID[i];
      }
    }      
    
    return (all);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidUpdate(){
    const myLocalStorege= window.localStorage;
    myLocalStorege.setItem('my', JSON.stringify(this.props.productsID));
  }

  render() {   
    if (this.props.loading){
      return (<h1>'loading...'</h1>);
    } 
    const { activeItem } = this.state;    
    return (
      <Menu className= 'header-menu'>
        <Link to='/'>
          <Menu.Item name='Головна' active={activeItem === 'Головна'} onClick={this.handleItemClick}>
            Головна
          </Menu.Item>
        </Link>          
        <Link to='/aboutus'>
          <Menu.Item name='AboutUS' active={activeItem === 'AboutUS'} onClick={this.handleItemClick}>
            About Us
          </Menu.Item>
        </Link>          

        <Menu.Menu position='right'>
          <Menu.Item name='Cart' >
          {this.handleAllPrice()} грн.
          </Menu.Item>
        <Link to='/cart'>
        < Menu.Item name='Cart' active={activeItem === 'Cart'} onClick={this.handleItemClick} >   
            <div id='cart-count' >
              {Object.keys(this.props.productsID).length?
                Object.keys(this.props.productsID).length
                :''
              }
            </div>
            <Icon name='cart' />
            Cart
          </Menu.Item>
        </Link>          
        </Menu.Menu>
      </Menu>
    )
  }
}



const mapStateToProps= (state)=>{
  return {
    products: state.productReducer.products,
    productsID: state.cartReducer.productsID, 
    loading: state.productReducer.loading,
  }  
}

const mapDispatchToProps= (dispatch)=>{
  return{
    setStor: (item)=>dispatch(item)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMenu);