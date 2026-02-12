import { TableRowProps } from "./Table.types";

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

export default TableRow;
