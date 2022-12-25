import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, Subject } from 'rxjs';
import { Students } from '../Models/students';
import { Schools } from '../Models/schools';
import { Departments } from '../Models/departments';


@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private endpointUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) { }

  private subject = new Subject<any>();
  static ngInjectableDef = undefined;

  //Send Event to view info details
  sendViewDetailsEvent(id: string) {
    this.subject.next(id);
  }

  getViewDetailsEvent() {
    return this.subject.asObservable();
  }

  //GET STUDENTS
  getStudents(): Observable<Students[]> {
    return this.httpClient.get<any[]>(`${this.endpointUrl}/Students`);
  }

  //GET STUDENT INFO
  getStudentInfo(studentId: string): Observable<Students[]> {
    return this.httpClient.get<any[]>(`${this.endpointUrl}/Students/${studentId}`);
  }

  //ADD NEW STUDENT
  addStudent(param): Observable<any> {
    return this.httpClient.post<any>(`${this.endpointUrl}/Students`, param);
  }

  //UPDATE STUDENT INFO
  updateStudent(studentId: string, bodyParam): Observable<any> {
    return this.httpClient.put<any>(`${this.endpointUrl}/Students/${studentId}`, bodyParam);
  }

  //DELETE STUDENT
  removeStudent(studentId): Observable<any> {
    return this.httpClient.delete<any>(`${this.endpointUrl}/Students/${studentId}`);
  }

  //**********************************************************************************************//
  
  //GET SCHOOLS
  getSchools(): Observable<Schools[]> {
    return this.httpClient.get<any[]>(`${this.endpointUrl}/Schools`);
  }

  //GET SCHOOL INFO
  getSchoolInfo(schoolId: string): Observable<Schools[]> {
    return this.httpClient.get<any[]>(`${this.endpointUrl}/Schools/${schoolId}`);
  }

  //ADD NEW SCHOOL
  addSchool(param): Observable<any> {
    return this.httpClient.post<any>(`${this.endpointUrl}/Schools`, param);
  }

  //UPDATE SCHOOL INFO
  updateSchool(schoolId: string, bodyParam): Observable<any> {
    return this.httpClient.put<any>(`${this.endpointUrl}/Schools/${schoolId}`, bodyParam);
  }

  //DELETE SCHOOL
  removeSchool(schoolId): Observable<any> {
    return this.httpClient.delete<any>(`${this.endpointUrl}/Schools/${schoolId}`);
  }


  //**********************************************************************************************//


  //GET DEPARTMENTS
  getDepartments(): Observable<Departments[]> {
    return this.httpClient.get<any[]>(`${this.endpointUrl}/Departments`);
  }

  //GET DEPARTMENT INFO
  getDepartmentInfo(deptId: string): Observable<Departments[]> {
    return this.httpClient.get<any[]>(`${this.endpointUrl}/Departments/${deptId}`);
  }

  //ADD NEW DEPARTMENT
  addDepartment(param): Observable<any> {
    return this.httpClient.post<any>(`${this.endpointUrl}/Departments`, param);
  }

  //UPDATE DEPARTMENT INFO
  updateDepartment(deptId: string, bodyParam): Observable<any> {
    return this.httpClient.put<any>(`${this.endpointUrl}/Departments/${deptId}`, bodyParam);
  }

  //DELETE DEPARTMENT
  removeDepartment(deptId): Observable<any> {
    return this.httpClient.delete<any>(`${this.endpointUrl}/Departments/${deptId}`);
  }

}
