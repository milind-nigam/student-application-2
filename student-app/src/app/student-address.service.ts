import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import StudentAddress from './studentAddress';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StudentAddressService {

  private studentAddressUrl = 'http://localhost:8080/api/studentAddress';  // URL to web api

  constructor(private http: HttpClient) { }

  getstudentAddresses(): Observable<StudentAddress[]> {
    return this.http.get<StudentAddress[]>(this.studentAddressUrl);
  }


  getstudentAddress(city: string): Observable<StudentAddress> {
    const url = `${this.studentAddressUrl}/${city}`;
    return this.http.get<StudentAddress>(url);
  }

  addstudentAddress(studentaddress: StudentAddress): Observable<StudentAddress> {
    return this.http.post<StudentAddress>(this.studentAddressUrl, studentaddress, httpOptions);
  }
}
