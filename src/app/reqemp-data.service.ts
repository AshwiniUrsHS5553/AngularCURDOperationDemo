import { Injectable } from '@angular/core';
import { EmplInfoService } from './empl-info.service';
import { IEmployee } from 'src/app/employe';
import { Empldetails } from './empDetails';

@Injectable({
  providedIn: 'root'
})
export class ReqempDataService {
  emplid: string;
  selectedemplId: number;
  public employees: IEmployee;
  public lst: Empldetails[];
  public empdetails: Empldetails[];
  selectedPaxList: Empldetails;
  constructor(private emplservice: EmplInfoService) {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log('y am not running');
    this.emplservice.getEmplData().subscribe(data => {
      this.employees = data;
    });
  }

  public reqEmpl(empid): Empldetails {
    this.lst = this.employees.data;
    for (let i = 0; i < this.lst.length; i++) {
      this.lst.forEach(element => {
        if (this.lst[i].id === this.selectedemplId) {
          this.selectedPaxList = this.lst[i];
          console.log('detil', this.selectedPaxList.first_name);
        }
      });
    }

    return this.selectedPaxList;
  }
}
