import React, { Component } from 'react';
import axios from 'axios';


class AddClient extends Component {

  state = {
    client_id: null,
    client_name: "",
    company_name: "",
    position: "",
    tel: null,
    email: "",
    last_contacted_on: "",
  }

  addClient = () => {
    const client = {
      client_id: this.state.client_id,
      client_name: this.state.client_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

    if(Object.keys(client).length === 0 && client.constructor === Object){
      axios.post('/api/clients', client)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({
              client_id: null,
              client_name: "",
              company_name: "",
              position: "",
              tel: null,
              email: "",
              last_contacted_on: ""
            })
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      client_id: null,
      client_name: "",
      company_name: "",
      position: "",
      tel: null,
      email: "",
      last_contacted_on: ""
    })
  }

  render() {
    let { 
      client_id,
      client_name,
      company_name,
      position,
      tel,
      email,
      last_contacted_on 
    } = this.state;

    return (
      <div>
        <input type="hidden" value={client_id} />
        <div className="form-group">
          <input type="text" class="form-control" onChange={this.handleChange} value={client_name} />
        </div>
        <div className="form-group">
          <input type="text" class="form-control" onChange={this.handleChange} value={company_name} />
        </div>
        <div className="form-group">
          <input type="text" class="form-control" onChange={this.handleChange} value={position} />
        </div>
        <div className="form-group">
          <input type="text" class="form-control" onChange={this.handleChange} value={tel} />
        </div>
        <div className="form-group">
          <input type="text" class="form-control" onChange={this.handleChange} value={email} />
        </div>
        <div className="form-group">
          <input type="text" class="form-control" onChange={this.handleChange} value={last_contacted_on} />
        </div>
        <button className="btn btn-success" onClick={this.addClient}>add Client</button>
      </div>
    )
  }
}

export default AddClient