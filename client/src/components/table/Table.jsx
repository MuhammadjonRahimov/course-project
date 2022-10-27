import styles from './Table.module.css';

import { COLUMNS } from '../../data/columns';
import MOCK_DATA from '../../data/MOCK_DATA.json'

import { useTable } from 'react-table';
import { useMemo } from 'react';

function Table() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({ columns, data });


	return (
		<table {...getTableProps}>
			<thead>
				{
					headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))
							}
						</tr>
					))
				}
			</thead>
			<tbody {...getTableBodyProps()}>
				{
					rows.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{
									row.cells.map((cell) => {
										return <td {...cell.getCellProps()} data-label={cell.column.Header}>
											{cell.render('Cell')}
										</td>
									})
								}
							</tr>
						)
					})
				}
			</tbody>
			<tfoot>
				{footerGroups.map((footerGroup) => (
					<tr {...footerGroup.getFooterGroupProps()}>
						{footerGroup.headers.map((column) => (
							<td {...column.getFooterProps()}>{column.render('Footer')}</td>
						))}
					</tr>
				)
				)}
			</tfoot>
		</table>
	)
}
export default Table;