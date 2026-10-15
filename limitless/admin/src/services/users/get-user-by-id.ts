// React Query Imports
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GET } from "../axios-request-handler";
import { URL } from "../api-base-urls";
import { User } from "../../types/auth/user";

// API & Service Imports

/**
 * React Query hook for user login mutation.
 *
 * @returns {Object} - React Query hook result object.
 */

export const useGetUserbyIdHook = (id: number): UseQueryResult<User, Error> => {
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
  const GetUserById = async (): Promise<unknown> => {
    const response = await GET(URL.GET_USER_BY_ID(id));
    console.log("GET USER BY ID RESPONSE", response);
    return response;
  };

  return useQuery({
    // Function that performs the fetching
    queryFn: GetUserById,
    queryKey: ["get-user-by-id", id],
  });
};
