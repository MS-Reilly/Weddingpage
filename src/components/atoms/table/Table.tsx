import { TableProps } from "./Table.types";

const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={`min-w-full ${className}`}>{children}</table>;
};

export default Table;
