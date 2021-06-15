import React, { useEffect } from 'react';
import styled from 'styled-components';

import Table from '../Table/Table';

import usePassengers from '../../hooks/usePassengers';

import { COLUMNS } from '../../constants/tableColumns';
import { modifyResponse } from './../../utils/helpers';

const LayoutContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;

	img {
		width: 100%;
		padding: 5px 10px;
	}
`;

const Layout = () => {
	const { fetchPassengers, isLoading, response } = usePassengers();
	const { data, totalPages } = response;

	const paginatioHandler = ({ page, size }) => {
		fetchPassengers(page, size);
	};

	useEffect(() => fetchPassengers(), []);

	return (
		<LayoutContainer>
			<Table
				columns={COLUMNS}
				data={modifyResponse(data)}
				totalPages={totalPages}
				isLoading={isLoading}
				onPagination={paginatioHandler}
			/>
		</LayoutContainer>
	);
};

export default Layout;
