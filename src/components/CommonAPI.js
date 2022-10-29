import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import FilesUploadComponent from './files-upload-component';
import MultiFilesUploadComponent from './multiple-files-upload';
import Render from './render';

class CommonAPI extends Component {

  constructor(props){
     super(props);
     this.state = {
         jsonResponse: '',
     }
  }

  handleCallback = (apiResponse) =>{
    this.setState({jsonResponse: apiResponse})
  }

  render() {
    return (
      <div className="App">
        <MultiFilesUploadComponent apiPath="/common" parentCallback = {this.handleCallback}/>
        {this.state.jsonResponse != '' && (
          <div>
            {JSON.stringify(this.state.jsonResponse)}
          </div>
        )}
      </div>
    );
  }
}
export default CommonAPI;
