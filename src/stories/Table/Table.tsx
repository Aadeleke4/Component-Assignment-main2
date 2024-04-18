// import React, { Component } from 'react';
// import { TableProps } from './Table.types';

// class Table extends Component<TableProps> {
//   render() {
//     const { children, className } = this.props;
//     return <table className={className}>{children}</table>;
//   }
// }

// export default Table;
import  { Component } from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

// Styled component for the table wrapper
const TableWrapper = styled.div<{ backgroundColor?: string ; disabled?: boolean }>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')}; /* Dim the table if disabled */
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')}; /* Disable pointer events if disabled */
`;

class Table extends Component<TableProps> {
  render() {
    const { children, className, backgroundColor } = this.props;
    return (
      <TableWrapper backgroundColor={backgroundColor}> {/* Pass backgroundColor prop to the wrapper */}
        <table className={className}>{children}</table>
      </TableWrapper>
    );
  }
}

export default Table;
