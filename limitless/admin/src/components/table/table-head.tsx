// Interface

import { ITableHead } from "../../types/auth/dashboard/table";

// React
// import React from "react";

/**
 *
 * @param IProps
 * @example
 *  <TableHeader tableHeader={['Doctor Name', 'Location','Experience','Education','Status','Action']} />
 */
const TableHeader = ({ tableHeader }: ITableHead) => {
  const lastindex = tableHeader && tableHeader.length - 1;

  return (
    <thead className="w-full bg-[#F5F5F5] sticky -top-1  z-10">
      <tr className="h-[46px] w-full">
        {tableHeader &&
          tableHeader.map((item: string, index: number) => {
            return (
              <th
                key={index}
                className={`px-3  text-sm w-max h-[90%] truncate  font-medium text-b   ${
                  index == lastindex ? "text-end  pr-8" : "text-start"
                }`}
              >
                {item}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
// w-[40%]
