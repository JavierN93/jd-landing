import { doPost } from './http';
import { ContactUs, RequestDesignEstimate } from '../types/lead';

export const leadApiService = {
  contactUs: (body: ContactUs) => {
    return doPost('/contact', body);
  },
  requestDesignEstimate: (body: RequestDesignEstimate) => {
    return doPost('/request-design-estimate', body);
  }
};
