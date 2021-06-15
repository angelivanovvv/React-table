import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const SelectContainer = styled.div`
	span {
		margin-left: 10px;
	}

	select {
		height: 38px;
		width: 45px;
		border: 0;
		margin-left: 10px;
		cursor: pointer;
	}
	select:focus {
		outline: none;
	}
`;

const Select = ({ label, options, pageSize, onChange }) => {
	const onSelectChanged = useCallback((event) => {
		const {
			target: { value },
		} = event;

		onChange(parseInt(value));
	}, []);

	return (
		<SelectContainer>
			<span>{label}</span>
			<select value={pageSize} onChange={onSelectChanged}>
				{options.map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						{pageSize}
					</option>
				))}
			</select>
		</SelectContainer>
	);
};

Select.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array.isRequired,
	pageSize: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

Select.propTypes = {
	label: 'Page size',
};

export default Select;
