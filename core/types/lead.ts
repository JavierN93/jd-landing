import { CustomerType } from '../data/how-it-works';
import { ColorClass, ProductCategory } from '../data/product';
import { SourceFoundUs } from './marketing';

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

export interface RequestConsultation {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}

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

export interface JoinSupplier {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
}

export interface BuyKit {
  kitName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface ShowroomContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customerType: CustomerType;
  productCategory: ProductCategory;
  colorClass: ColorClass;
  image: string;
  sourceFoundUs: SourceFoundUs;
}

export interface ShowroomDIYContact {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  comment: string;
  attachments: string[];
}
