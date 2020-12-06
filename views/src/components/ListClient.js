import React from 'react';
import { Table } from 'reactstrap';

const ListClient = ({ clients, deleteClient }) => {

  return (
    <Table>
      <tr>
        <th>Client ID</th>
        <th>Client Name</th>
        <th>Company Name</th>
        <th>Position</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Last contacted on</th>
        <th>Action</th>
      </tr>
      <tbody>
      {
        clients &&
          clients.length > 0 ?
            (
              clients.map(client => {
                return (
                  <tr key={client._id}>
                    <td>{client.client_id}</td>
                    <td>{client.client_name}</td>
                    <td>{client.company_name}</td>
                    <td>{client.position}</td>
                    <td>{client.tel}</td>
                    <td>{client.email}</td>
                    <td>{client.last_contacted_on}</td>
                    <td><i className="fa fa-trash" onClick={() => {if(window.confirm("Are you sure?"))deleteClient(client._id)}}></i></td>
                  </tr>
                )
              })
            )
            :
            (
              <tr><td colspan="8"><strong>No record found</strong></td></tr>
            )
      }
      </tbody>
      </Table>
  )
}

export default ListClient