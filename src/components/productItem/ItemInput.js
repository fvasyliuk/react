import React from 'react'
import { Input, Button, Label } from 'semantic-ui-react'


//disabled={items.length === 0}
 
const ItemInput= ({ inputValue, decrement, increment, price })=>{
    return (
      <Input labelPosition='right' type="text" min= '1' >
        <Button onClick={decrement}>-</Button>
        <input value= {inputValue} size='7'/>     
        <Button onClick={increment}>+</Button>          
        <Label>
          {price} * {inputValue} = {inputValue*price}
        </Label>
      </Input>
    )
}


export default ItemInput;