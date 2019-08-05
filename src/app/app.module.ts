import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmplInfoService } from './empl-info.service';
import { ViewComponent } from './view/view.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReqempDataService } from './reqemp-data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, routingComponents, EmployeeListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmplInfoService, ReqempDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
