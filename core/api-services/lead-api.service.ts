import { doPost } from './http';
import { ContactUs } from '../types/lead';

export const leadApiService = {
  contactUs: (body: ContactUs) => {
    return doPost('/contact', body);
  },
};
