import React from 'react'
import FileService from '../../services/FileService';
import Tree from './Tree';
import AppNavbar from '../AUTH/AppNavbar';
import TreeModalComponent from './TreeModalComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TreeList extends React.Component{

    constructor(){
        super();
        this.state = {
            treeData:[],
            show: false
        }
        
        
    }

    componentDidMount(){
        FileService.getFiles().then((response) => {
            this.setState({treeData: response.data})
        });
        
    }


    setShow(bool){
      this.setState({show : bool})
    }

     render() {
 
    return (
      <>
      <div className="fluid"> 
      <AppNavbar/>
       
       

          <div className="col text-center">
            <h2>File Explorer</h2>
            <button onClick={() => this.setShow(true)} setShow={() => this.setShow()} className="btn"><FontAwesomeIcon icon="plus"/></button>
            <TreeModalComponent  show={this.state.show} />
              <div className="row mt-3 d-flex justify-content-center">
                <div className="col-lg-8 text-left text-dark">
                  <Tree data={this.state.treeData} />
                </div>
              </div>
          </div>

        </div>
      </>
    );
  };
}
  export default TreeList