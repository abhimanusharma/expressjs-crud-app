import React, { Component } from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';


class AddClient extends Component {

  state = {
    client_id: "",
    client_name: "",
    company_name: "",
    position: "",
    tel: "",
    email: "",
    last_contacted_on: "",
    visible: false,
    color: 'success',
    msg: '',
  }

  formatDate = (date) => {
    var d = new Date(date);
    return (d.getMonth + 1) + '-' + d.getDate() + '-' + d.getFullYear();
  }

  showAlert = (color, msg) => {
    console.log("showAlert!!!");
    this.setState({color:color});
    this.setState({msg:msg});
    this.setState({visible:true},()=>{
      window.setTimeout(()=>{
        this.setState({visible:false})
      },2000)
    });
  }

  addClient = (e) => {
  
    const client = {
      client_id: this.state.client_id,
      client_name: this.state.client_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

    if(Object.keys(client).length !== 0 && client.constructor === Object){
      axios.post('/api/clients', client)
        .then(res => {
          if(res.data){

            this.showAlert("success", "Clients added!");

            this.props.getClients();
            this.setState({
              client_id: "",
              client_name: "",
              company_name: "",
              position: "",
              tel: "",
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
      [e.target.name] : e.target.value
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
      last_contacted_on,
      color,
      visible,
      msg
    } = this.state;

    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" name="client_id" placeholder="Client ID" className="form-control" onChange={this.handleChange} value={client_id} required />
          </div>
          <div className="form-group">
            <input type="text" name="client_name" placeholder="Client name" className="form-control" onChange={this.handleChange} value={client_name} required />
          </div>
          <div className="form-group">
            <input type="text" name="company_name" placeholder="Company name" className="form-control" onChange={this.handleChange} value={company_name} required />
          </div>
          <div className="form-group">
            <input type="text" name="position" placeholder="Position" className="form-control" onChange={this.handleChange} value={position} required />
          </div>
          <div className="form-group">
            <input type="text" name="tel" placeholder="Phone no." className="form-control" onChange={this.handleChange} value={tel} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email ID" className="form-control" onChange={this.handleChange} value={email} required />
          </div>
          <div className="form-group">
            <input type="date" name="last_contacted_on" placeholder="Last contacted on" className="form-control" onChange={this.handleChange} value={last_contacted_on} required />
          </div>
          <Alert color={color} isOpen={visible}>{msg}</Alert>
          <button type="button" className="btn btn-success" onClick={this.addClient}>add Client</button>
        </form>
      </div>
    )
  }
}

export default AddClient