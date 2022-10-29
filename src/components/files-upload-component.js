import React, { Component, useState } from 'react';

export default class FilesUploadComponent extends Component {

    constructor(props) {
      super(props);
      this.onFileChange = this.onFileChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        file: '',
        apiPath: '',
        host: 'http://localhost',
        port: '8080',
        result: ''
      }
    }

    onFileChange(e) {
      this.setState({ file: e.target.files[0] })
    }

    onSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('file', this.state.file)
      const file = formData.get('file');
      var url = this.state.host + ":" + this.state.port + this.props.apiPath;
      this.callAPI(url,file);
    }

    readFileAsText(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (_ref) {
          var target = _ref.target;

          resolve(target.result);
        };
        reader.readAsText(file);
      });
    }

    async callAPI(url,file) {
      var response = await this.sendJSON(url,file)
      console.log(response);
      this.setState(this.state.result = response);
      this.props.parentCallback(response);
    }

    async sendJSON (url,file) {
      try {
        var json = await this.readFileAsText(file);
        json = "{ \"files\": [" + json + "] }";

      } catch(error) {
        console.log(error);
      }

      const headers = {
        'Content-Type': 'application/json'
      };

      const response = await fetch(url, {
        headers,
        method: 'POST',
        body: json
      });

      if (!response.ok) {
        throw new Error(`Sending file caused an error - ${response.statusText}`);
      }

      return response.json();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
