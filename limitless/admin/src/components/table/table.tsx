// Components
import { ITable } from "../../types/auth/dashboard/table";
import CardFrame from "../cards/card-frame";
import { MemoizedUserTypeDropdown } from "../dropdowns";
import SearchInput from "../inputs/search-input";
import TableFoot from "./table-foot";

// Interface

/**
 *
 * @param IProps
 * @example
 * <Table
 *   tabs={['Approved', 'Requested']}
 *   currentTab={tab}
 *   setTab={(value: number) => setTab(value)}
 *  >
 *   <TableHeader tableHeader={tableHeader} />
 * </Table>
 *
 */
const Table = ({
  children,
  handleSubmit,
  searchTerm,
  setSearchTerm,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  rowsOption,
  total,
  isFooter,
  isPending,
  isOpen,
  selectOption,
  selectedOption,
  toggleDropdown,
  isSearch,
}: ITable) => {
  return (
    <CardFrame className="!p-0 overflow-hidden border-3 border-[#E8E8E8] ">
      {isSearch && (
        <div className="flex justify-between items-center gap-x-4 px-4 py-4">
          <form onSubmit={handleSubmit} className="w-full ">
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </form>

          <MemoizedUserTypeDropdown
            isOpen={isOpen}
            selectOption={selectOption}
            selectedOption={selectedOption}
            toggleDropdown={toggleDropdown}
            setRowsPerPage={setRowsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      <div className={`${isSearch}?"py-4":""`}>
        {isPending ? (
          <div className="flex justify-center items-center h-[35dvh]">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary" />
          </div>
        ) : (
          <div className="w-full lg:overflow-x-scroll xl:overflow-x-auto max-h-[60dvh] overflow-y-auto  ">
            <table className="w-full relative ">{children}</table>
          </div>
        )}
      </div>

      {isFooter && (
        <TableFoot
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsOption={rowsOption}
          total={total}
        />
      )}
    </CardFrame>
  );
};

export default Table;
