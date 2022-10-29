import React, { Component, useState } from 'react';

export default class MultiFilesUploadComponent extends Component {

    constructor(props) {
      super(props);
      this.onFileChange = this.onFileChange.bind(this);
      this.onFileChange2 = this.onFileChange2.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        file: '',
        file2: '',
        apiPath: '',
        host: 'http://localhost',
        port: '8080',
        result: ''
      }
    }

    onFileChange(e) {
      this.setState({ file: e.target.files[0] })
    }

    onFileChange2(e) {
      this.setState({ file2: e.target.files[0] })
    }

    onSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('file', this.state.file)
      formData.append('file2', this.state.file2)
      const file = formData.get('file');
      const file2 = formData.get('file2');
      var url = this.state.host + ":" + this.state.port + this.props.apiPath;
      this.callAPI(url,file,file2);
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

    async callAPI(url,file,file2) {
      var response = await this.sendJSON(url,file,file2)
      console.log(response);
      this.setState(this.state.result = response);
      this.props.parentCallback(response);
    }

    async sendJSON (url,file,file2) {
      try {
        var data1 = await this.readFileAsText(file);
        var data2 = await this.readFileAsText(file2);

    var json = "{ \"files\": [" + data1 + "," +data2 + "] }";

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
                            <input name="file" type="file" onChange={this.onFileChange} />
                            <input name="file2" type="file" onChange={this.onFileChange2} />
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
