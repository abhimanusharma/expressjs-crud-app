import React, {Component} from 'react';
import axios from 'axios';

import AddLead from './AddLead';
import ListLead from './ListLead';

class Lead extends Component {

  state = {
    leads: []
  }

  componentDidMount(){
    this.getLeads();
  }

  getLeads = () => {
    axios.get('/api/leads')
      .then(res => {
        if(res.data){
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
        if(res.data){
          this.getLeads()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { leads } = this.state;

    return(
      <div>
        <h1>All Leads</h1>
        <AddLead getLeads={this.getLeads}/>
        <ListLead leads={leads} deleteLead={this.deleteLead}/>
      </div>
    )
  }
}

export default Lead;