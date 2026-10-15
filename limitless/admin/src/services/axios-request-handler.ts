import axiosInstance from "../configs/axios.config";

/**
 * Performs a GET request.
 * @param {string} endPoint - The URL to hit.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the GET request fails.
 */
export const GET = async (endPoint: string): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(endPoint);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Performs a POST request.
 * @param {string} endPoint - The URL to hit.
 * @param {unknown} data - The request data (optional).
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the POST request fails.
 */
export const POST = async (
  endPoint: string,
  data: unknown = {},
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(endPoint, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Performs a PUT request.
 * @param {string} endPoint - The URL to hit.
 * @param {unknown} data - The request data.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the PUT request fails.
 */
export const PUT = async (
  endPoint: string,
  data: unknown = {},
): Promise<unknown> => {
  try {
    const response = await axiosInstance.put(endPoint, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Performs a PATCH request.
 * @param {string} endPoint - The URL to hit.
 * @param {unknown} data - The request data.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the PATCH request fails.
 */
export const PATCH = async (
  endPoint: string,
  data: unknown,
): Promise<unknown> => {
  try {
    const response = await axiosInstance.patch(endPoint, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Performs a DELETE request.
 * @param {string} endPoint - The URL to hit.
 * @param {unknown} [data] - The request data (optional).
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the DELETE request fails.
 */
export const DELETE = async (
  endPoint: string,
  data?: unknown,
): Promise<unknown> => {
  try {
    const response = await axiosInstance.delete(endPoint, { data });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
