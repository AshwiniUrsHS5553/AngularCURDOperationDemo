import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmplInfoService } from 'src/app/empl-info.service';
import { IEmployee } from '../employe';
import { Empldetails } from '../empDetails';
import { ReqempDataService } from '../reqemp-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  emplid: string;
  selectedemplId: number;
  public employees: IEmployee;
  public lst: Empldetails[];
  public empdetails: Empldetails[];
  public selectedPaxList: Empldetails;
  // tslint:disable-next-line:max-line-length
  constructor(
    public route: ActivatedRoute,
    private emplservice: EmplInfoService,
    private router: Router,
    private reqempData: ReqempDataService
  ) {}

  ngOnInit() {
    console.log('y am not running');
    this.emplservice.getEmplData().subscribe(data => {
      this.employees = data;
      this.lst = this.employees.data;
      this.emplid = this.route.snapshot.paramMap.get('id');
      this.selectedemplId = +this.emplid;
      // logic to assign selected apx data into an array
      this.lst = this.employees.data;
      for (let i = 0; i < this.lst.length; i++) {
        this.lst.forEach(element => {
          if (this.lst[i].id === this.selectedemplId) {
            this.selectedPaxList = this.lst[i];
            console.log('detail', this.selectedPaxList.first_name);
          }
        });
      }
    });

    // this.emplservice.delEmplData(this.selectedemplId).subscribe(() => console.log('Empl with id', this.selectedemplId, 'is deleted'));
  }

  public gobackHome() {
    this.router.navigate(['emplist']);
  }
  public EditEmpl(selectedPaxList) {
    this.router.navigate(['edit', selectedPaxList.id]);
  }

  public EmpDel() {
    this.emplservice.delEmplData(this.selectedemplId).subscribe(() => console.log('Empl with id', this.selectedemplId, 'is deleted'));

    this.router.navigate(['emplist']);
  }
}
