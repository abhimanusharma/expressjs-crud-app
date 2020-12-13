import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

import AddLead from './AddLead';
import ListLead from './ListLead';

class Lead extends Component {

  state = {
    leads: [],
    lead: {
      _id: "",
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
      comments: [],
      connected_times: "",
      is_delete: false,
    },
    isEdit: false,
  }

  componentDidMount() {
    this.getLeads();
  }

  getLeads = () => {
    axios.get('/api/leads')
      .then(res => {
        if (res.data) {
          this.setState({
            leads: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteLead = (id) => {

    axios.delete(`/api/leads/${id}`)
      .then(res => {
        if (res.data) {
          this.getLeads()
        }
      })
      .catch(err => console.log(err))
  }

  getLead = (id) => {
    axios.get(`/api/leads/${id}`)
      .then(res => {
        if (res.data) {
          this.setState({
            lead: res.data
          });
        }
      })
  }

  editLead = (id) => {
    this.setState({
      isEdit: true
    });
    this.getLead(id);
  }

  isButtonEdit = (status) => {
    this.setState({
      isEdit: status
    });
  }

  formatDate = (date, format) => {
    var d = new Date(date),
      formattedDate;

    switch (format) {
      case 'y-m-d':
        formattedDate = d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
        break;
      case 'd/m/y':
        formattedDate = ("0" + d.getDate()).slice(-2) + '/' + ("0" + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
        break;
      case 'm/d/y':
        formattedDate = ("0" + (d.getMonth() + 1)).slice(-2) + '/' + ("0" + d.getDate()).slice(-2) + '/' + d.getFullYear();
        break;
      default:
        formattedDate = d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
    }

    return formattedDate;

  }

  render() {
    let {
      leads,
      lead,
      isEdit
    } = this.state;

    return (
      <div>
        <h1> All Leads </h1>
        <AddLead
          getLeads={this.getLeads} lead={lead}
          isEdit={isEdit} formatDate={this.formatDate}
          isButtonEdit={this.isButtonEdit}
        />
        <br />
        <ListLead
          leads={leads} editLead={this.editLead}
          deleteLead={this.deleteLead}
          formatDate={this.formatDate}
        />
      </div>
    )
  }
}

export default Lead;