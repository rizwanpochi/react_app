import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import FilesUploadComponent from './files-upload-component';
import Render from './render';

class FirstAPI extends Component {

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
        <FilesUploadComponent apiPath="/json1" parentCallback = {this.handleCallback}/>
        {this.state.jsonResponse != '' && (
          <div>
            {JSON.stringify(this.state.jsonResponse)}
            <Render data={this.state.jsonResponse} />
          </div>
        )}
      </div>
    );
  }
}
export default FirstAPI;
