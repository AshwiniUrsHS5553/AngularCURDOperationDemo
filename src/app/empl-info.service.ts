import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employe';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class EmplInfoService {
  handleError: any;
  constructor(private http: HttpClient) {}

  getEmplData(): Observable<IEmployee> {
    return this.http.get<IEmployee>('https://reqres.in/api/users');
  }
  delEmplData(id: number): Observable<void> {
    return this.http.delete<void>('https://reqres.in/api/users/2/${id}');
  }
}
