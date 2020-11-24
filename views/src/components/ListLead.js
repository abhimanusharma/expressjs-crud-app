import React from 'react';

const ListLead = ({ leads, deleteLead }) => {

  return (
    <ul>
      {
        leads &&
          leads.length > 0 ?
            (
              leads.map(lead => {
                return (
                  <li key={lead._id} onClick={() => deleteLead(lead._id)}>{lead.action}</li>
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

export default ListLead