import React from 'react';

const ListSale = ({ sales, deleteSale }) => {

  return (
    <ul>
      {
        sales &&
          sales.length > 0 ?
            (
              sales.map(sale => {
                return (
                  <li key={sale._id} onClick={() => deleteSale(sale._id)}>{sale.action}</li>
                )
              })
            )
            :
            (
              <li>No record found</li>
            )
      }
    </ul>
  )
}

export default ListSale