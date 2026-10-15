// React Query Imports
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PaginatedResponse } from "../../types/auth/user";
import { GET } from "../axios-request-handler";
import { URL } from "../api-base-urls";

// API & Service Imports

/**
 * React Query hook for user login mutation.
 *
 * @returns {Object} - React Query hook result object.
 */

export const useGetAllUsersHook = (
  page: number,
  limit: number,
  search: string,
  role: string,
  status: string,
): UseQueryResult<PaginatedResponse, Error> => {
  // ): UseQueryResult<IAllCreatorsResponse, Error> => {
  /**clg
   * Function to perform the actual API call for user login.
   *
   * @param payload - Payload
   *
   * @returns {Promise<any>} - Promise resolving to the API response.
   *
   * @throws Will throw an error if the API call fails.
   */
  const GetAllUsers = async (): Promise<unknown> => {
    const response = await GET(
      URL.GET_ALL_USERS(page, limit, search, role, status),
    );
    console.log("Resoinse", response);
    return response;
  };

  return useQuery({
    // Function that performs the fetching
    queryFn: GetAllUsers,
    queryKey: ["get-all-users", page, limit, search, role, status],
  });
};
