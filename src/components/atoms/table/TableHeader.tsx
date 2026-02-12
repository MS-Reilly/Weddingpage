import { TableHeaderProps } from "./Table.types";

const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

export default TableHeader;
