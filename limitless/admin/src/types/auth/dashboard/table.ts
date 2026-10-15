import { FormikHandlers } from "formik";

export interface ITable {
  children?: React.ReactNode;
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit?: FormikHandlers["handleSubmit"];
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
  tabs?: string[];
  currentTab?: number;
  setTab?: React.Dispatch<React.SetStateAction<number>>;
  isFooter?: boolean;
  isPending?: boolean;
  userType?: string;
  selectedOption?: string;
  toggleDropdown?: () => void;
  selectOption?: (option: React.SetStateAction<string>) => void;
  isOpen?: boolean;
  isSearch?: boolean;
}

export interface ITableHead {
  tableHeader?: string[];
  isUserTable?: boolean;
}

export interface TableFootI {
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
  isStar?: boolean;
}
