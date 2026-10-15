// React Query Imports
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

// API & Service Imports
import { URL } from "../api-base-urls";

// Toast Import
// import toast from "react-hot-toast";

// Custom Types Imports
import toast from "react-hot-toast";
import { CustomAxiosErrorType } from "../../types/auth/shared";
import { POST } from "../axios-request-handler";

/**
 * React Query hook for user login mutation.
 *
 * @returns {Object} - React Query hook result object.
 */
export const useApproveUserHook = (
  id: number,
): UseMutationResult<unknown, Error, { id: number }> => {
  /**
   * Function to perform the actual API call for user login.
   *
   * @param payload - Payload containing user login details.
   *
   * @returns {Promise<any>} - Promise resolving to the API response.
   *
   * @throws Will throw an error if the API call fails.
   */
  // const UpdateBioFn = async (payload: changeBioProps): Promise<unknown> => {
  //   const response = await PUT(URL.BIO_INFO(userId), payload);
  //   return response;
  // };

  const approveUser = async (): Promise<unknown> => {
    const response = await POST(URL.APPROVE_USER(id));
    return response;
  };

  const queryClient = useQueryClient();

  return useMutation({
    // Function that performs the mutation
    mutationFn: approveUser,
    /**
     * Callback fired when the mutation is successful.
     *
     * @param message - The data returned by the mutation function (userLoginFn).
     *
     * @param variables - The variables passed to the mutation function (Payload).
     *
     * @param context - Additional context provided during the mutation setup (optional).
     */
    onSuccess: (message, variables, context) => {
      toast.success("User approved successfully");
      return {
        message,
        variables,
        context,
      };
    },
    // Callback fired when the mutation encounters an error
    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? "Something went wrong");

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },

    // Callback fired when the mutation is settled (whether successful or not)
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["get-all-users"] });
    },
  });
};
