import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import FileService from '../../services/FileService';



class TreeModalComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
        id : null,
        name : '',
  
      
       
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.saveOrUpdateDir = this.saveOrUpdateDir.bind(this);
}

saveOrUpdateDir = (e) => {
    e.preventDefault();
    FileService.addNewDir(this.state.name, this.props.id);
    
    this.props.setShow(false);

    window.location.reload(false);
}

deleteDir = (e) => {
    e.preventDefault();
    FileService.deleteDir(this.props.id);
    
    this.props.setShow(false);
    window.location.reload(false);

}

changeNameHandler = (event) => {
    this.setState({name : event.target.value});
    console.log(this.state.name);
}

    render() {
        return (
            <Modal show={this.props.show}  animation={false}>
            <Modal.Header closeButton>
            {!this.props.deleteMode ? 
                             <Modal.Title>Add New Dir </Modal.Title> : 
                             <Modal.Title>Are you sure to delete dir  "{this.props.name}" </Modal.Title>
            }
             
            </Modal.Header>
            <Form>
            {!this.props.deleteMode ?
                        <Form.Group className="mb-3" controlId="name">
                        <Form.Label >Dir Name</Form.Label>
                        <Form.Control type="text" onChange={this.changeNameHandler} placeholder="Enter dir name"/>
                        </Form.Group>
                        : ""  }

            <Modal.Footer>
                {!this.props.deleteMode ? 
                            <Button variant="primary"  onClick={this.saveOrUpdateDir}>Add new dir</Button> : 
                            <Button variant="primary"  onClick={this.deleteDir}>Delete dir</Button>
            }
            <Button variant="secondary" onClick={() => this.props.setShow(false)}>Close</Button>
            </Modal.Footer>
            </Form>
          </Modal>
        )
    }
}

export default TreeModalComponent
