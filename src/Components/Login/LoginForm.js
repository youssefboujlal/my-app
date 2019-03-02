import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input,Button,Row ,Container} from 'reactstrap';




class LoginForm extends Component {
  
  state = {

    name:null,
    age:null,
    gender:null
  }
 
  
  
    render() {
      return (
        <div>
            <Container className="App">
        <h2>Sign In</h2>
         <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form className="form">
        <FormGroup row>
          <Label for="exampleEmail" sm={2} size="lg">Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email ..." bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail2" placeholder="Password ..." />
          </Col>
        </FormGroup>
        {' '}
        <Button>Connexion</Button>
      </Form>
          </Col>
        </Row>
     </Container>

        </div>
    
     
      

      
      );
      
    }
    
  }
  
  
export default LoginForm;