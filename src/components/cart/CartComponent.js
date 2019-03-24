import React from 'react';
import { Button, Table, Image, Icon } from 'semantic-ui-react';
import ItemInput from '../productItem/ItemInput';
import { Link } from 'react-router-dom';



const CartComponent= ({products,handleDeleteButton, setStor, productsID, allPrice})=>(
    <Table celled compact definition>
              <Table.Header fullWidth>
                <Table.Row>        
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>                  
                  <Table.HeaderCell>Price</Table.HeaderCell>   
                  <Table.HeaderCell>Option</Table.HeaderCell>     
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          
              <Table.Body>                 
                {products.map(({id, title, price, img})=>(
                  <Table.Row key={id}>        
                    <Table.Cell><Image size='tiny' verticalAlign='top' src={img} /></Table.Cell>
                    <Table.Cell>{title}</Table.Cell>                    
                    <Table.Cell>{price}</Table.Cell>
                    <Table.Cell>
                      <ItemInput 
                        price= {price}
                        inputValue={productsID[id]}
                        decrement={()=> setStor({type:"DECREMENT_COUNT", payload:id})} 
                        increment={()=> setStor({type:"INCREMENT_COUNT", payload:id})}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Button 
                        onClick={()=>handleDeleteButton(id)}
                      >
                        <Icon name='delete' />
                      </Button>
                    </Table.Cell>
                  </Table.Row>  
                ))}
              </Table.Body>
          
              <Table.Footer fullWidth>
                <Table.Row>        
                  <Table.HeaderCell colSpan='5'>
                    <Table.Cell>Загальна вартість: </Table.Cell>
                    <Table.Cell>
                      {allPrice} грн.
                    </Table.Cell>
                    <Link to="/cart/confirm" className='confirm'>
                      <Button floated='right'  primary size='small'>
                        Офомити заказ
                      </Button>    
                    </Link>                          
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
)


export default CartComponent;