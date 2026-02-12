import { TableBodyProps } from "./Table.types";

const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

export default TableBody;
