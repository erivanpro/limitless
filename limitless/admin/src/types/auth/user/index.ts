import { ReactNode } from "react";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  phone_number: string;
  emergency_contact: string;
  user_type: UserType[];
  date_of_birth: string;
  country: string;
  city: string;
  address: string;
  id_card_front: string;
  id_card_back: string;
  expiry_date: string;
  license_number: string;
  license_image: string;
  role: string;
  profile_picture: string;
  is_verified: boolean;
  is_rejected: boolean;
  rejection_reason: string;
  host: Host;
  actions?: ReactNode;
}
export interface Host {
  id: number;
  stripe_account_id: string;
}
export interface PaginatedResponse {
  data: User[];
  total: number;
  totalPages: number;
  currentPage: number;
  nextPage: number | null;
  previousPage?: number | null;
}
export interface RejectUserPayload {
  id: number;
  rejection_reason: string;
}

// Define the enums
export enum UserType {
  USER = "user",
  HOST = "host",
}
