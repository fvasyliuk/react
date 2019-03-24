import React from 'react'
import { Button, Form } from 'semantic-ui-react'


const handlePost= ()=>{        
  fetch('http://localhost:3001/api/v1/delivery', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({name: 'fedir'}),
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',        
    }),
    
}).then(response => response.json())
.then(json => console.log(json));
  
}

const CartSubmitForm = () => (
  <Form action="http://localhost:3001/api/v1/delivery" method="post">
    <Form.Group unstackable widths={2}>
      <Form.Input label='First name' placeholder='First name' />
      <Form.Input label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Phone' placeholder='Phone' />
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit' floated='right' >Submit</Button>
    <Button type='button' floated='left' onClick={handlePost} >SAMPLE</Button>
  </Form>
  
)

export default CartSubmitForm;