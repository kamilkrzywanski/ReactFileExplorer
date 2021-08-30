
import axios from 'axios';
 
import React,{Component} from 'react';
import { Modal, Button } from 'react-bootstrap';
 
class FileUpoladComponent extends Component {
  
    state = {
 
      // Initially, no file is selected
      selectedFile: null

    };
    
    // On file select (from the pop up)
    onFileChange = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        'file', this.state.selectedFile
      );
        formData.append('parrent', this.props.id)
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("http://localhost:8080/upload/"+this.props.id, formData);
      this.props.setUpload(false)
      
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {this.state.selectedFile.name}</p>
 
             
<p>File Type: {this.state.selectedFile.type}</p>
 
             
<p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
           Choose before Pressing the Upload button
          </div>
        );
      }
    };
    
    render() {
    
    
      return (
        <Modal show={this.props.show}  animation={false}>
             <Modal.Header closeButton onClick={() => this.props.setUpload(false)}></Modal.Header>

        <div style={{visibility: this.state.visibility }}>

            <h5>
              Upload file
            </h5>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={ () => this.onFileUpload()}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
        <Button variant="info" onClick={() => this.props.setUpload(false)}>Close</Button>
        </Modal>
      );
    }
  }
 
  export default FileUpoladComponent;