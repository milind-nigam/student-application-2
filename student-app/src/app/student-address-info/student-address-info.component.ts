import { Component, OnInit } from '@angular/core';
import StudentAddress from '../studentAddress';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentAddressService } from '../student-address.service';

@Component({
  selector: 'app-student-address-info',
  templateUrl: './student-address-info.component.html',
  styleUrls: ['./student-address-info.component.css']
})
export class StudentAddressInfoComponent implements OnInit {

  myForm: FormGroup;
  studentAddress: StudentAddress[];

  constructor(public fb: FormBuilder, private studentAddressService: StudentAddressService) { }

  ngOnInit(): void {
    this.reactiveForm();
  }


  // tslint:disable-next-line: typedef
  reactiveForm() {
    this.myForm = this.fb.group({
      address: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      aditional: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      // tslint:disable-next-line: max-line-length
      pin_code: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]*$')]),
      city: new FormControl('', [Validators.required, Validators.maxLength(56)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(56)]),
    });
  }
  submitForm(): any {
    console.log(this.myForm.value);
    this.studentAddressService.addstudentAddress(this.myForm.value)
         .subscribe();
    this.myForm.reset();
  }

}
