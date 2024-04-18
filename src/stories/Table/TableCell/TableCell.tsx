import  { Component } from "react";
import { TableCellProps } from "./TableCell.types";

class TableCell extends Component<TableCellProps> {
  render() {
    const { children, className } = this.props;
    return <td className={className}>{children}</td>;
  }
}

export default TableCell;
