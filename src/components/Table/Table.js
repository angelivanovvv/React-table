import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useTable, usePagination } from 'react-table';

import Spinner from '../../common/Spinner/Spinner';
import Pagination from '../Pagination/Pagination';

const TableContainer = styled.div`
	width: 100%;
	margin: 20px 70px 70px;
`;

const TableStyles = styled.div`
	width: 100%;

	table {
		border-radius: 5px;
		font-size: 12px;
		font-weight: normal;
		border: none;
		border-collapse: collapse;
		width: 100%;
		background-color: white;
	}

	table td,
	table th {
		text-align: center;
		padding: 5px;
	}

	table td {
		font-size: 12px;
	}

	table td:last-child {
		font-size: 12px;
	}

	table thead th {
		color: #ffffff;
		background: #324960;
		border: 1px solid #f8f8f8;
	}

	table tbody tr {
		border-bottom: 1px solid #a5a5a5;
	}

	table tbody tr:hover {
		transition: all 0.1s ease;
		background-color: rgba(50, 73, 96, 0.5);
	}

	table tbody tr:last-child {
		border-bottom: none;
	}
`;

const LoadingTable = styled.tr`
	height: calc(100vh - 200px);
	position: relative;
`;

const Table = ({ columns, isLoading, data, totalPages, onPagination }) => {
	const tableConfig = {
		columns,
		data,
	};

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(tableConfig, usePagination);

	const pageSizes = [10, 25, 50];

	return (
		<TableContainer>
			<TableStyles>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr
								key={headerGroup.id}
								{...headerGroup.getHeaderGroupProps()}
							>
								{headerGroup.headers.map((column) => (
									<th
										key={column.id}
										{...column.getHeaderProps()}
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{isLoading ? (
							<LoadingTable>
								<Spinner />
							</LoadingTable>
						) : (
							rows.map((row) => {
								prepareRow(row);
								return (
									<tr key={row.index} {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td
													key={cell.value}
													{...cell.getCellProps()}
												>
													{cell.render('Cell')}
												</td>
											);
										})}
									</tr>
								);
							})
						)}
					</tbody>
				</table>
			</TableStyles>
			<Pagination
				totalPages={totalPages}
				pageSizes={pageSizes}
				onPaginationUpdate={onPagination}
			/>
		</TableContainer>
	);
};

Table.propTypes = {
	isLoading: PropTypes.bool,
	columns: PropTypes.array,
	data: PropTypes.array,
	totalPages: PropTypes.number,
	onPagination: PropTypes.func,
};

Table.defaultProps = {
	isLoading: false,
	columns: [],
	data: [],
	totalPages: 0,
	onPagination: () => {},
};

export default Table;
