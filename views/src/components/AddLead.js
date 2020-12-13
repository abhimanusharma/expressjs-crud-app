import React, { Component } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import { Alert } from 'reactstrap';


class AddLead extends Component {

  state = {
    lead_id: uuid(),
    created_on: "",
    source: "",
    assigned_to: "",
    client_name: "",
    email: "",
    tel_no: "",
    position: "",
    company: "",
    domain: "",
    status: false,
    confidence: "",
    comments: "",
    connected_times: "",
    is_delete: false,
    visible: false,
    color: 'success',
    msg: '',
  }

  showAlert = (color, msg) => {
    console.log("showAlert!!!");
    this.setState({
      color: color
    });
    this.setState({
      msg: msg
    });
    this.setState({
      visible: true
    }, () => {
      window.setTimeout(() => {
        this.setState({
          visible: false
        })
      }, 2000)
    });
  }

  addLead = (e) => {

    const lead = {
      lead_id: this.state.lead_id,
      created_on: this.state.created_on,
      source: this.state.source,
      assigned_to: this.state.assigned_to,
      client_name: this.state.client_name,
      email: this.state.email,
      tel_no: this.state.tel_no,
      position: this.state.position,
      company: this.state.company,
      domain: this.state.domain,
      status: this.state.status,
      confidence: this.state.confidence,
      comments: this.state.comments,
      connected_times: this.state.connected_times,
      is_delete: this.state.is_delete,
    }

    if (Object.keys(lead).length !== 0 && lead.constructor === Object) {
      axios.post('/api/leads', lead)
        .then(res => {
          if (res.data) {

            this.showAlert("success", "Lead added!");

            this.props.getLeads();
            this.setState({
              lead_id: uuid(),
              created_on: "",
              source: "",
              assigned_to: "",
              client_name: "",
              email: "",
              tel_no: "",
              position: "",
              company: "",
              domain: "",
              status: false,
              confidence: "",
              comments: "",
              connected_times: "",
              is_delete: false,
            })
          }
        })
        .catch(err => console.log(err))
    } else {
      console.log('input field required')
    }
  }

  updateLead = (e) => {

    const lead = {
      lead_id: uuid(),
      created_on: "",
      source: "",
      assigned_to: "",
      client_name: "",
      email: "",
      tel_no: "",
      position: "",
      company: "",
      domain: "",
      status: false,
      confidence: "",
      comments: "",
      connected_times: "",
      is_delete: false,
    }

    if (Object.keys(lead).length !== 0 && lead.constructor === Object) {
      var id = this.state._id;
      axios.put(`/api/clients/${id}`, lead)
        .then(res => {
          if (res.data) {
            this.props.isButtonEdit(false);
            this.showAlert("success", "Lead updated!");

            this.props.getLeads();
            this.setState({
              _id: "",
              lead_id: uuid(),
              created_on: "",
              Source: "",
              assigned_to: "",
              client_name: "",
              email: "",
              tel_no: "",
              position: "",
              company: "",
              domain: "",
              status: false,
              confidence: "",
              comments: "",
              connected_times: "",
              is_delete: false,
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
    if (prevProp.lead.lead_id !== this.props.lead.lead_id) {
      let {
        lead
      } = this.props;
      this.setState({
        lead_id: lead.lead_id,
        created_on: lead.created_on,
        source: lead.source,
        assigned_to: lead.assigned_to,
        client_name: lead.client_name,
        email: lead.email,
        tel_no: lead.tel_no,
        position: lead.position,
        company: lead.company,
        domain: lead.domain,
        status: lead.status,
        confidence: lead.confidence,
        comments: lead.comments,
        connected_times: lead.connected_times,
        is_delete: lead.is_delete,
      });
    }
  }

  render() {
    let {
      _id,
      lead_id,
      created_on,
      source,
      assigned_to,
      client_name,
      email,
      tel_no,
      position,
      company,
      domain,
      status,
      confidence,
      comments,
      connected_times,
      is_delete,
      color,
      visible,
      msg
    } = this.state;

    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" name="lead_id" placeholder="Lead ID"
              className="form-control" onChange={this.handleChange}
              value={lead_id} required />
          </div>
          <div className="form-group">
            <input type="date" name="created_on" placeholder="Created on"
              className="form-control" onChange={this.handleChange}
              value={this.props.formatDate(created_on)} required />
          </div>
          <div className="form-group">
            <input type="text" name="source" placeholder="Source"
              className="form-control" onChange={this.handleChange}
              value={source} required />
          </div>
          <div className="form-group">
            <input type="text" name="assigned_to" placeholder="Assigned to"
              className="form-control" onChange={this.handleChange}
              value={assigned_to} required />
          </div>
          <div className="form-group">
            <input type="text" name="client_name"
              placeholder="Client name" className="form-control"
              onChange={this.handleChange} value={client_name} required />
          </div>
          <div className="form-group">
            <input type="text" name="company"
              placeholder="Company" className="form-control"
              onChange={this.handleChange}
              value={company} required />
          </div>
          <div className="form-group">
            <input type="text" name="position" placeholder="Position"
              className="form-control" onChange={this.handleChange}
              value={position} required />
          </div>
          <div className="form-group">
            <input type="text" name="tel_no" placeholder="Phone no."
              className="form-control" onChange={this.handleChange}
              value={tel_no} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email ID"
              className="form-control" onChange={this.handleChange}
              value={email} required />
          </div>
          <div className="form-group">
            <input type="text" name="domain" placeholder="Domain"
              className="form-control" onChange={this.handleChange}
              value={domain} required />
          </div>
          <div className="form-group">
            <input type="text" name="status" placeholder="status"
              className="form-control" onChange={this.handleChange}
              value={status} required />
          </div>
          <div className="form-group">
            <input type="text" name="confidence" placeholder="Confindence"
              className="form-control" onChange={this.handleChange}
              value={confidence} required />
          </div>
          <div className="form-group">
            <input type="text" name="connected_times" placeholder="Connected Times?"
              className="form-control" onChange={this.handleChange}
              value={connected_times} required />
          </div>
          <div className="form-group">
            <input type="text" name="is_delete" placeholder="Deleted?"
              className="form-control" onChange={this.handleChange}
              value={is_delete} required />
          </div>
          <div className="form-group">
            <textarea type="text" name="comments" placeholder="Comments"
              className="form-control" onChange={this.handleChange}
              value={comments} required></textarea>
          </div>
          <Alert color={color} isOpen={visible}>{msg}</Alert>
          <input type="hidden" name="_id" value={_id} />
          {this.props.isEdit ? <button type="button" className="btn btn-success"
            onClick={this.updateLead}> Update Lead </button>
            : <button type="button" className="btn btn-success"
              onClick={this.addLead}> Add Lead </button>
          }
        </form>
      </div>
    )
  }
}

export default AddLead