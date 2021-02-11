import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import StudentBasic from './studentBasic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StudentBasicService {

  private studentBasicUrl = 'http://localhost:8080/api/studentBasic';  // URL to web api

  constructor(private http: HttpClient) { }

  getstudentBasics(): Observable<StudentBasic[]> {
    return this.http.get<StudentBasic[]>(this.studentBasicUrl);
  }


  getstudentBasic(studentName: string): Observable<StudentBasic> {
    const url = `${this.studentBasicUrl}/${studentName}`;
    return this.http.get<StudentBasic>(url);
  }

  addstudentBasic(studentbasic: StudentBasic): Observable<StudentBasic> {
    return this.http.post<StudentBasic>(this.studentBasicUrl, studentbasic, httpOptions);
  }

}
