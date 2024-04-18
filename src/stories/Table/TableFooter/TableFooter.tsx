import { Component } from "react";
import { TableFooterProps } from "./TableFooter.types";

class TableFooter extends Component<TableFooterProps> {
  render() {
    const { children, className } = this.props;
    return <tfoot className={className}>{children}</tfoot>;
  }
}

export default TableFooter;
