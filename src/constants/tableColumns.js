/* eslint-disable react/prop-types */
import React from 'react';

export const COLUMNS = [
	{
		Header: 'ID',
		accessor: 'trip_id',
	},
	{
		Header: 'Trip',
		accessor: 'trip_name',
	},
	{
		Header: 'Passinger Name',
		accessor: 'passenger_name',
	},
	{
		Header: 'Airline',
		columns: [
			{
				Header: 'Id',
				accessor: 'id',
			},
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Logo',
				accessor: 'logo',
				Cell: ({ value }) => {
					return <img src={value} alt="logo" />;
				},
			},
			{
				Header: 'Slogan',
				accessor: 'slogan',
			},
			{
				Header: 'Website',
				accessor: 'website',
			},
			{
				Header: 'Country',
				accessor: 'country',
			},
			{
				Header: 'Established',
				accessor: 'established',
			},
			{
				Header: 'Head Quaters',
				accessor: 'head_quaters',
			},
		],
	},
];
