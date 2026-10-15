// React Query Imports
import { useMutation, UseMutationResult } from "@tanstack/react-query";

// API & Service Imports
import { URL } from "../api-base-urls";
// Types Imports

// Toast Import
import toast from "react-hot-toast";

// Custom Types Imports
import { LoginPayload } from "../../types/auth";
import { POST } from "../axios-request-handler";
import { CustomAxiosErrorType } from "../../types/auth/shared";

export const useAdminLoginMutation = (): UseMutationResult<
  unknown,
  Error,
  LoginPayload
> => {
  const adminLoginFn = async (payload: LoginPayload): Promise<unknown> => {
    const response = await POST(URL.ADMIN_LOGIN, payload);
    return response;
  };

  return useMutation({
    mutationFn: adminLoginFn,

    onSuccess: (message, variables, context) => {
      toast.success("Login Successfull");
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      toast.error(error?.response?.data?.message ?? "Login Failed");

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },

    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: ['user'] });
    // },
  });
};
