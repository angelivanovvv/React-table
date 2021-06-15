import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Button from '../../common/Button/Button';
import Select from '../../common/Select/Select';

import { PropTypes } from 'prop-types';

const PaginationContainer = styled.div`
	width: 100%;
`;

const PaginationStyles = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	.pageButton {
		font-size: 15px;
		outline: none;
		border: none;
		padding: 10px;
		background-color: #fff;
		cursor: pointer;
	}

	.pageButton:disabled {
		cursor: not-allowed;
		color: gray;
	}
`;

const PaginationList = styled.div`
	.pageButton-active {
		background-color: rgba(50, 73, 96, 0.5);
		color: #ffffff;
		font-weight: bold;
	}

	.pageButton:hover {
		transition: all 0.1s ease;
		background-color: rgba(50, 73, 96, 0.5);
		color: #ffffff;
		font-weight: bold;
	}
`;

const Pagination = ({ totalPages, pageSizes, onPaginationUpdate }) => {
	const [canNextPage, setCanNextPage] = useState(false);
	const [canPreviousPage, setcanPreviousPage] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [visiblePages, setVisiblePages] = useState([]);
	const [pageSize, setPageSize] = useState(10);

	const filterPages = (visiblePages, totalPages) =>
		visiblePages.filter((page) => page <= totalPages);

	const getVisiblePages = (page, total) => {
		if (total < 7) {
			return filterPages([1, 2, 3, 4, 5, 6], total);
		} else {
			if (page % 5 >= 0 && page > 4 && page + 2 < total) {
				return [1, page - 1, page, page + 1, total];
			} else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
				return [1, total - 3, total - 2, total - 1, total];
			} else {
				return [1, 2, 3, 4, 5, total];
			}
		}
	};

	const changePage = (page) => {
		const visiblePages = getVisiblePages(page, totalPages);
		setVisiblePages(filterPages(visiblePages, totalPages));
	};

	const goToPage = (page) => {
		setCurrentPage(page);
		changePage(page);
	};

	const goToPreviousPage = () => {
		setCurrentPage(currentPage - 1);
		changePage(currentPage);
	};

	const goToNextPage = () => {
		setCurrentPage(currentPage + 1);
		changePage(currentPage);
	};

	useEffect(() => {
		setVisiblePages(getVisiblePages(null, totalPages));
	}, [totalPages]);

	useEffect(() => {
		onPaginationUpdate({ page: currentPage - 1, size: pageSize });
	}, [currentPage, pageSize]);

	useEffect(() => {
		if (currentPage > 1) setcanPreviousPage(false);
		if (currentPage === 1) setcanPreviousPage(true);
		if (currentPage < totalPages) setCanNextPage(false);
		if (currentPage === totalPages) setCanNextPage(true);
	}, [currentPage, totalPages]);

	return (
		<PaginationContainer>
			<PaginationStyles>
				<Button
					className="pageButton outerButton"
					onClick={goToPreviousPage}
					disabled={canPreviousPage}
				>
					Previous
				</Button>
				<PaginationList>
					{visiblePages.map((page, index, array) => {
						return (
							<Button
								key={page}
								className={
									currentPage === page
										? 'pageButton pageButton-active'
										: 'pageButton'
								}
								onClick={() => goToPage(page)}
							>
								{array[index - 1] + 2 < page
									? `...${page}`
									: page}
							</Button>
						);
					})}
				</PaginationList>
				<Button
					className="pageButton outerButton"
					onClick={goToNextPage}
					disabled={canNextPage}
				>
					Next
				</Button>
				<Select
					label="page size"
					options={pageSizes}
					pageSize={pageSize}
					onChange={setPageSize}
				/>
			</PaginationStyles>
		</PaginationContainer>
	);
};

Pagination.propTypes = {
	totalPages: PropTypes.number,
	pageSizes: PropTypes.array,
	onPaginationUpdate: PropTypes.func,
};

Pagination.defaultProps = {
	totalPages: 0,
	pageSizes: [],
	onPaginationUpdate: () => {},
};

export default Pagination;
