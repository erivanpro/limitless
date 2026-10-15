// React
import React, { FC } from "react";
// import ArrowDown from "../../../assets/arrow-down.png"

// Icons

interface ISearchInput {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISearchInput> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="py-3 pl-2">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div>
        <div
          className={`relative mt-1 flex items-center rounded-lg border-2 border-[#E8E8E8] bg-white px-2 md:px-3 focus-within:border-[#BFBFBF] focus-within:ring-2 focus-within:ring-[#E8E8E8]`}
        >
          <input
            type="search"
            id="table-search"
            className="h-10 w-full rounded-lg bg-[url('assets/search.svg')] bg-position-[right_0.75rem_center] bg-no-repeat pr-10 text-base placeholder:text-[#828282] focus:outline-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            autoComplete="off"
            enterKeyHint="search"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
