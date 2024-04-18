import  { Component } from "react";
import { TableRowProps } from "./TableRow.types";

class TableRow extends Component<TableRowProps> {
  render() {
    const { children, className } = this.props;
    return <tr className={className}>{children}</tr>;
  }
}

export default TableRow;
