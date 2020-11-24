import React, {Component} from 'react';
import axios from 'axios';

import AddSale from './AddSale';
import ListSale from './ListSale';

class Sale extends Component {

  state = {
    sales: []
  }

  componentDidMount(){
    this.getSales();
  }

  getSales = () => {
    axios.get('/api/sales')
      .then(res => {
        if(res.data){
          this.setState({
            sasles: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteSale = (id) => {

    axios.delete(`/api/sales/${id}`)
      .then(res => {
        if(res.data){
          this.getSales()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { Sales } = this.state;

    return(
      <div>
        <h1>All Sales</h1>
        <AddSale getSales={this.getSales}/>
        <ListSale Sales={Sales} deleteSale={this.deleteSale}/>
      </div>
    )
  }
}

export default Sale;