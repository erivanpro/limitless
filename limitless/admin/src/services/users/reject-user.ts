// React Query Imports
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

// API & Service Imports
import { URL } from "../api-base-urls";

// Toast Import
import toast from "react-hot-toast";
import { RejectUserPayload } from "../../types/auth/user";
import { POST } from "../axios-request-handler";
import { CustomAxiosErrorType } from "../../types/auth/shared";

// Custom Types Imports

export const useRejectUserHook = (): UseMutationResult<
  unknown,
  Error,
  RejectUserPayload
> => {
  const queryClient = useQueryClient();

  const rejectUser = async (payload: RejectUserPayload): Promise<unknown> => {
    const response = await POST(URL.REJECT_USER(), payload);
    return response;
  };

  return useMutation({
    mutationFn: rejectUser,

    onSuccess: (message, variables, context) => {
      toast.success("User Rejected Successfully");
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? "User rejection failed");

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["get-all-users"] });
    },
  });
};
