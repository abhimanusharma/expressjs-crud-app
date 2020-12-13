import React from 'react';
import { Table } from 'reactstrap';

const ListLead = ({ leads, editLead, deleteLead, formatDate }) => {

  return (
    <Table>
      <thead>
        <tr>
          <th>Lead ID</th>
          <th>Source</th>
          <th>Assigned to</th>
          <th>Client Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Position</th>
          <th>Company</th>
          <th>Domain</th>
          <th>Status</th>
          <th>Confidence</th>
          <th>Connected times</th>
          <th>Is delete?</th>
          <th>Comments</th>
          <th>Created on</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          leads &&
            leads.length > 0 ?
            (
              leads.map(lead => {
                return (
                  <tr key={lead._id}>
                    <td>{lead.lead_id}</td>
                    <td>{lead.source}</td>
                    <td>{lead.assigned_to}</td>
                    <td>{lead.client_name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.tel_no}</td>
                    <td>{lead.position}</td>
                    <td>{lead.company}</td>
                    <td>{lead.domain}</td>
                    <td>{lead.status}</td>
                    <td>{lead.confidence}</td>
                    <td>{lead.connected_times}</td>
                    <td>{lead.is_delete}</td>
                    <td>{lead.comments}</td>
                    <td>{formatDate(lead.created_on, 'd/m/y')}</td>
                    <td className="action-icon">
                      <i className="fa fa-edit" onClick={() => { editLead(lead._id) }}></i> <i className="fa fa-trash" onClick={() => { if (window.confirm("Are you sure?")) deleteLead(lead._id) }}></i>
                    </td>
                  </tr>
                )
              })
            )
            :
            (
              <tr><td colSpan="8"><strong>No record found</strong></td></tr>
            )
        }
      </tbody>
    </Table>
  )
}

export default ListLead