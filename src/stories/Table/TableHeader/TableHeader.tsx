import  { Component } from "react";
import { TableHeaderProps } from "./TableHeader.types";

class TableHeader extends Component<TableHeaderProps> {
  render() {
    const { children, className } = this.props;
    return <thead className={className}>{children}</thead>;
  }
}

export default TableHeader;
