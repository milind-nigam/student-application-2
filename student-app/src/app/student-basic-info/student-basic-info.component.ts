import { Component, OnInit } from '@angular/core';
import StudentBasic from '../studentBasic';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentBasicService } from '../student-basic.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


@Component({
  selector: 'app-student-basic-info',
  templateUrl: './student-basic-info.component.html',
  styleUrls: ['./student-basic-info.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
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
      DOB: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/')]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern('^[a-zA-Z ]*$')]),
    });
  }

    submitForm(): any {
      console.log(this.myForm.value);
      this.studentBasicService.addstudentBasic(this.myForm.value)
         .subscribe();
    }

}
