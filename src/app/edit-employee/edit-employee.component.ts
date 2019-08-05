import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empldetails } from '../empDetails';
import { IEmployee } from '../employe';
import { ReqempDataService } from '../reqemp-data.service';
import { EmplInfoService } from '../empl-info.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public editSelectedpax: String;
  emplid: string;
  selectedemplId: number;
  public employees: IEmployee;
  public lst: Empldetails[];
  public empdetails: Empldetails[];
  public selectedPaxList: Empldetails;
  public flg: boolean;
  public message: string;
  constructor(
    public route: ActivatedRoute,
    private emplservice: EmplInfoService,
    private router: Router,
    private reqempData: ReqempDataService
  ) {}

  ngOnInit() {
    this.emplservice.getEmplData().subscribe(data => {
      this.employees = data;
      this.lst = this.employees.data;
      this.emplid = this.route.snapshot.paramMap.get('id');
      this.selectedemplId = +this.emplid;
      // logic to assign selected apx data into an array
      for (let i = 0; i < this.lst.length; i++) {
        this.lst.forEach(element => {
          if (this.lst[i].id === this.selectedemplId) {
            this.selectedPaxList = this.lst[i];
            console.log('detil', this.selectedPaxList.first_name);
          }
        });
      }
    });
  }

  subform() {
    this.message = 'U have successfuly saved the data';
    this.flg = true;
    this.router.navigate(['emplist']);
  }
}
