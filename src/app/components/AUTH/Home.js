import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap"
import TreeList from '../Tree/TreeList';
class Home extends Component {

  

  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div style={{marginTop:"20px"}}>
            <Alert variant="primary">
              <h2>Reactjs JWT Authentication Application</h2>
              <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
            </Alert>
          </div>
        </Container>
      
      </div>
    );
  }
}

export default Home;