import { doPost } from './http';
import { ContactUs, RequestDesignEstimate, ShowroomContact, ShowroomDIYContact } from '../types/lead';

export const leadApiService = {
  contactUs: (body: ContactUs) => {
    return doPost('/contact', body);
  },
  requestDesignEstimate: (body: RequestDesignEstimate) => {
    return doPost('/request-design-estimate', body);
  },
  showRoomContact: (body: ShowroomContact) => {
    return doPost('/showroom-contact', body);
  },
  showRoomDIYContact: (body: ShowroomDIYContact) => {
    return doPost('/showroom-diy-contact', body);
  }
};
