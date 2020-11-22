import React, { Component } from 'react';
import axios from 'axios';


class AddLead extends Component {

  state = {
    lead_id: null,
    lead_name: "",
    company_name: "",
    position: "",
    tel: null,
    email: "",
    last_contacted_on: "",
  }

  addLead = () => {
    const lead = {
      lead_id: this.state.lead_id,
      lead_name: this.state.lead_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

    if(Object.keys(lead).length === 0 && lead.constructor === Object){
      axios.post('/api/leads', lead)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({
              lead_id: null,
              lead_name: "",
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
      lead_id: null,
      lead_name: "",
      company_name: "",
      position: "",
      tel: null,
      email: "",
      last_contacted_on: ""
    })
  }

  render() {
    let { 
      lead_id,
      lead_name,
      company_name,
      position,
      tel,
      email,
      last_contacted_on 
    } = this.state;

    return (
      <div>
        <input type="hidden" value={lead_id} />
        <input type="text" onChange={this.handleChange} value={lead_name} />
        <input type="text" onChange={this.handleChange} value={company_name} />
        <input type="text" onChange={this.handleChange} value={position} />
        <input type="text" onChange={this.handleChange} value={tel} />
        <input type="text" onChange={this.handleChange} value={email} />
        <input type="text" onChange={this.handleChange} value={last_contacted_on} />
        <button onClick={this.addLead}>add Lead</button>
      </div>
    )
  }
}

export default AddLead