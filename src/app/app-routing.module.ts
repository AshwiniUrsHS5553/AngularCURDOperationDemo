import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from 'src/app/view/view.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'emplist', component: EmployeeListComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: 'view', component: ViewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ViewComponent, EditEmployeeComponent, AppComponent, EmployeeListComponent];
