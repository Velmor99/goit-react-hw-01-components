import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Table = styled.table`
box-shadow: 1px 2px 4px black;
border-radius: 4px;
`;

const TableHeadRow = styled.th`
width: 292px;
height: 50px;
background-color: #00bcd4;
color: #ffffff;
text-transform: uppercase;
`;

const TableBodyRow = styled.td`
width: 292px;
height: 50px;
text-align: center;
color: #5c6975;
&:first-letter {
  text-transform: uppercase;
}
`;

const Tr = styled.tr`
&:nth-child(even) {
  background-color: #ecf2f3;
}
`;

export default function TransactionHistory ({items}) {
    return (
    <Table>
  <thead>
    <tr>
      <TableHeadRow>Type</TableHeadRow>
      <TableHeadRow>Amount</TableHeadRow>
      <TableHeadRow>Currency</TableHeadRow>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
        <Tr key={item.id}>
            <TableBodyRow>{item.type}</TableBodyRow>
            <TableBodyRow>{item.amount}</TableBodyRow>
            <TableBodyRow>{item.currency}</TableBodyRow>
      </Tr>
      ))}
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}