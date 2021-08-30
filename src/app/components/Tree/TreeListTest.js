import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import FileService from '../../services/FileService';


export default class TreeListTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData:[],
    };
  }

  componentDidMount(){
    FileService.getFiles().then((response) => {
        this.setState({treeData: response.data})
    });
    
}

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          isVirtualized={false}
        />
      </div>
    );
  }
}