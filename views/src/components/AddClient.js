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

  showAlert = (color, msg) => {
    console.log("showAlert!!!");
    this.setState({ color: color });
    this.setState({ msg: msg });
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false })
      }, 2000)
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

    if (Object.keys(client).length !== 0 && client.constructor === Object) {
      axios.post('/api/clients', client)
        .then(res => {
          if (res.data) {

            this.showAlert("success", "Client added!");

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
    } else {
      console.log('input field required')
    }
  }

  updateClient = (e) => {

    const client = {
      client_id: this.state.client_id,
      client_name: this.state.client_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

    if (Object.keys(client).length !== 0 && client.constructor === Object) {
      var id = this.state._id;
      axios.put(`/api/clients/${id}`, client)
        .then(res => {
          if (res.data) {
            this.props.isButtonEdit(false);
            this.showAlert("success", "Client updated!");

            this.props.getClients();
            this.setState({
              _id: "",
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
    } else {
      console.log('input field required')
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidUpdate(prevProp) {
    if (prevProp.client.client_id !== this.props.client.client_id) {
      let { client } = this.props;
      this.setState({
        _id: client._id,
        client_id: client.client_id,
        client_name: client.client_name,
        company_name: client.company_name,
        position: client.position,
        tel: client.tel,
        email: client.email,
        last_contacted_on: client.last_contacted_on
      });
    }
  }

  render() {
    let {
      _id,
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
            <input type="date" name="last_contacted_on" placeholder="Last contacted on" className="form-control" onChange={this.handleChange} value={this.props.formatDate(last_contacted_on)} required />
          </div>
          <Alert color={color} isOpen={visible}>{msg}</Alert>
          <input type="hidden" name="_id" value={_id} />
          {this.props.isEdit
            ? <button type="button" className="btn btn-success" onClick={this.updateClient}>Update Client</button>
            : <button type="button" className="btn btn-success" onClick={this.addClient}>Add Client</button>
          }
        </form>
      </div>
    )
  }
}

export default AddClient