import { Empldetails } from './empDetails';

export class IEmployee {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Empldetails[];
}
