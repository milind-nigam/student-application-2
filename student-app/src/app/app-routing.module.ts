import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponentComponent } from './root-component/root-component.component';
import { StudentComponentComponent } from './student-component/student-component.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponentComponent
  },
  {
    path: 'add',
    component: StudentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
