import { Component, OnInit } from '@angular/core';
import StudentBasic from '../studentBasic';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentBasicService } from '../student-basic.service';

import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;


@Component({
  selector: 'app-student-basic-info',
  templateUrl: './student-basic-info.component.html',
  styleUrls: ['./student-basic-info.component.css']
})
export class StudentBasicInfoComponent implements OnInit {

  myForm: FormGroup;
  selected: string;
  studentBasic: StudentBasic[];

  constructor(public fb: FormBuilder, private studentBasicService: StudentBasicService) { }

  ngOnInit(): void {
    this.reactiveForm();
  }


  // tslint:disable-next-line: typedef
  reactiveForm() {
    this.myForm = this.fb.group({
      student_name: new FormControl('', [Validators.required, Validators.maxLength(56), Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(112)]),
      // tslint:disable-next-line: max-line-length
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      DOB: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern('^[a-zA-Z ]*$')]),
    });
  }

    submitForm(): any {
      console.log(this.myForm.value);
      this.studentBasicService.addstudentBasic(this.myForm.value)
         .subscribe();
      const dateOfBirth: Moment = this.myForm.get('DOB').value;
      console.log(dateOfBirth.toObject());
      const yearOfBirth = dateOfBirth.toObject().years;
      console.log('yearOfBirth : ', yearOfBirth);
    }

}
