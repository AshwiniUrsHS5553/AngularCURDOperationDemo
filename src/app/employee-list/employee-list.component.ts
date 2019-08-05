import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmplInfoService } from 'src/app/empl-info.service';
import { IEmployee } from '../employe';
import { Empldetails } from '../empDetails';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emplid: string;
  selectedemplId: number;
  public employees: IEmployee;
  public lst: Empldetails[];
  public empdetails: Empldetails[];
  selectedPaxList: Empldetails;
  constructor(public route: ActivatedRoute, private emplservice: EmplInfoService, private router: Router) {}

  ngOnInit() {
    this.emplservice.getEmplData().subscribe(data => {
      this.employees = data;
      console.log('empl Data is', this.employees.data);
      this.lst = this.employees.data;
    });
  }
  onSelect(empl) {
    console.log('it is clicked');
    this.router.navigate(['view', empl.id]);
  }
}
