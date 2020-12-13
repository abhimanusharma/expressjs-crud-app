import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

import AddClient from './AddClient';
import ListClient from './ListClient';

class Client extends Component {

	state = {
		clients: [],
		client: {
			_id: "",
			client_id: uuid(),
			client_name: "",
			company_name: "",
			position: "",
			tel: "",
			email: "",
			last_contacted_on: "",
		},
		isEdit: false,
	}

	componentDidMount() {
		this.getClients();
	}

	getClients = () => {
		axios.get('/api/clients')
			.then(res => {
				if (res.data) {
					this.setState({
						clients: res.data
					})
				}
			})
			.catch(err => console.log(err))
	}

	deleteClient = (id) => {

		axios.delete(`/api/clients/${id}`)
			.then(res => {
				if (res.data) {
					this.getClients()
				}
			})
			.catch(err => console.log(err))
	}

	getClient = (id) => {
		axios.get(`/api/clients/${id}`)
			.then(res => {
				if (res.data) {
					this.setState({
						client: res.data
					});
				}
			})
	}

	editClient = (id) => {
		this.setState({
			isEdit: true
		});
		this.getClient(id);
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
			clients,
			client,
			isEdit
		} = this.state;

		return (
			<div>
				<h1> All Clients </h1>
				<AddClient
					getClients={this.getClients} client={client}
					isEdit={isEdit} formatDate={this.formatDate}
					isButtonEdit={this.isButtonEdit}
				/>
				<br />
				<ListClient
					clients={clients} editClient={this.editClient}
					deleteClient={this.deleteClient}
					formatDate={this.formatDate}
				/>
			</div>
		)
	}
}

export default Client;