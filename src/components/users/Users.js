import React, { Component } from 'react'

import { Form,ListGroup, Button } from 'react-bootstrap';

export class Users extends Component {
    

    state = {
        
        newName :"",
       
        myArray : [
            {name : "falhi", lName :"mehdi" },
            {name : "sabwat", lName :"saad" },
            {name : "mjid", lName :"abdi" },
        ]
    }

    deleteLi = (index) =>{
        const myArray =[...this.state.myArray];
        myArray.splice(index,1);
        this.setState({
            myArray
        })
    }
    /*
    onChange = (e) => this.setState( { [e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newName);
        this.setState({ newName: '' }); 
    }
*/
    changer = (event) =>{
        
        this.setState({

          newName:event.target.value
           
        });
     // console.log(event.target.value)
    }
    ajouteUser = (e) =>{
        e.preventDefault();
        //console.log(e.target.userName.value);
        const myArray =[...this.state.myArray];
        myArray.push({
            name:this.state.newName,
            lName:this.state.newName
        });
        this.setState({
            myArray
        });
    }
    

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
<Form >

   <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="name" placeholder="Enter name" value={this.state.newName.name} onChange={this.changer}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="lName" placeholder="Enter name" value={this.state.newName.lName} onChange={this.changer}/>
   
  </Form.Group>
  <Button variant="primary"  onClick={this.ajouteUser}>
    Submit
  </Button>
 
</Form>

<ListGroup className='mt-3'>

{this.state.myArray.map((user, index) => 

<ListGroup.Item  key={index} > {user.name}   {user.lName}  

<Button onClick={() =>{this.deleteLi(index)}} className='btn btn-danger float-end' > 

Delete</Button>
</ListGroup.Item>)

}

</ListGroup>
</div> 

</div>     
</div>  
        )
    }
}

export default Users
