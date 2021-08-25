import { CustomerType } from '../data/how-it-works';

export interface ContactUs {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  sourceFoundUs: string;
  message: string;
}


export interface RequestDesignEstimate {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  comment: string;
  attachments: string[];
  customerType: CustomerType;
}
