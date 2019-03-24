import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'



class ProductItem extends Component {

  
  render(){
    return(
      <Card>
        <Image src={this.props.item.img} />        
        <Card.Content>          
          <Card.Header>{this.props.item.title}</Card.Header>          
          <Card.Description>{this.props.item.body}</Card.Description>
        </Card.Content>
        <Card.Content extra > 
          <Card.Meta>
          <Icon name='money bill alternate outline' />
          <b>22</b>         
          </Card.Meta>           
        </Card.Content>    
        <Button color='green' onClick={()=>this.props.handleAddButton({type:"ADD_TO_CART", payload:this.props.item.id})}>Add to cart</Button>
      </Card>
    )
  }
}

export default ProductItem;