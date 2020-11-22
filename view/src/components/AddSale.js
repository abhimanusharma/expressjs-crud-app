import React, { Component } from 'react';
import axios from 'axios';


class AddSale extends Component {

  state = {
    sale_id: null,
    sale_name: "",
    company_name: "",
    position: "",
    tel: null,
    email: "",
    last_contacted_on: "",
  }

  addSale = () => {
    const sale = {
      sale_id: this.state.sale_id,
      sale_name: this.state.sale_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

    if(Object.keys(sale).length === 0 && sale.constructor === Object){
      axios.post('/api/Sales', sale)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({
              sale_id: null,
              sale_name: "",
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
      sale_id: null,
      sale_name: "",
      company_name: "",
      position: "",
      tel: null,
      email: "",
      last_contacted_on: ""
    })
  }

  render() {
    let { 
      sale_id,
      sale_name,
      company_name,
      position,
      tel,
      email,
      last_contacted_on 
    } = this.state;

    return (
      <div>
        <input type="hidden" value={sale_id} />
        <input type="text" onChange={this.handleChange} value={sale_name} />
        <input type="text" onChange={this.handleChange} value={company_name} />
        <input type="text" onChange={this.handleChange} value={position} />
        <input type="text" onChange={this.handleChange} value={tel} />
        <input type="text" onChange={this.handleChange} value={email} />
        <input type="text" onChange={this.handleChange} value={last_contacted_on} />
        <button onClick={this.addSale}>add Sale</button>
      </div>
    )
  }
}

export default AddSale