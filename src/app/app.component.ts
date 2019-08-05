import { Component } from '@angular/core';
import { EmplInfoService } from './empl-info.service';
import { IEmployee } from './employe';
import { AppRoutingModule } from './app-routing.module';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { Empldetails } from './empDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  public employees: IEmployee;
  public lst: Empldetails[];

  public constructor(private emplservice: EmplInfoService, private route: ActivatedRoute, private router: Router) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    /* // tslint:disable-next-line:label-position
    this.emplservice.getEmplData().subscribe(data => {
      this.employees = data;
      console.log('empl Data is', this.employees.data);
      this.lst = this.employees.data;
      for (let i = 0; i < this.lst.length; i++) {
        this.lst.forEach(element => {
          console.log('detil', this.lst[i].first_name);
        });
      }
    });*/
  }

  goEmplist() {
    console.log('it is clicked');
    this.router.navigate(['emplist']);
  }
}
