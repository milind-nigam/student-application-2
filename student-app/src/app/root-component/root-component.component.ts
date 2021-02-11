import { Component, Inject, OnInit } from '@angular/core';
import StudentBasic from '../studentBasic';
import StudentAddress from '../studentAddress';
import { StudentBasicService } from '../student-basic.service';
import { StudentAddressService } from '../student-address.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent implements OnInit {

  title = 'student-app';
  index: number ;
  displayedColumns: string[] = ['sno', 'student_name', 'email', 'mobile', 'city', 'state'];
  studentBasics: StudentBasic[];
  studentAddresses: StudentAddress[];
  datasource: any = [];


  constructor(private studentBasicService: StudentBasicService,
              private studentAddressService: StudentAddressService,
              public dialog: MatDialog, private router: Router ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.index = 0;
    this.getstudentBasics();
    this.getstudentAddresses();
   }

   // tslint:disable-next-line: typedef
   btnClick = function() {
    this.router.navigateByUrl('add');
   };

   // tslint:disable-next-line: typedef
   getstudentBasics(){
     return this.studentBasicService.getstudentBasics()
       .subscribe(
        studentbasics => {
          // console.log(studentbasics);
          this.studentBasics = studentbasics;
          console.log(studentbasics);

        }
       );
   }
   // tslint:disable-next-line: typedef
   getstudentAddresses(){
    return this.studentAddressService.getstudentAddresses()
      .subscribe(
       studentaddresses => {
         console.log(studentaddresses);
         this.studentAddresses = studentaddresses;

         for (let i = 0; i < this.studentBasics.length; i++){
          this.studentBasics[i].address = studentaddresses[i].address;
          this.studentBasics[i].aditional = studentaddresses[i].aditional;
          this.studentBasics[i].pin_code = studentaddresses[i].pin_code;
          this.studentBasics[i].state = studentaddresses[i].state;
          this.studentBasics[i].city = studentaddresses[i].city;

         }
         this.datasource = this.studentBasics;
         console.log(this.datasource);
        }
      );
  }
  // tslint:disable-next-line: typedef
  openDialog(studentData: any[]): void {
    const a = studentData;
    console.log(a);
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '650px',
      data : {studentData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
export interface DialogData {
  studentData: StudentBasic;
}
@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.css']
})
// tslint:disable-next-line: component-class-suffix
export class DialogContentExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}
