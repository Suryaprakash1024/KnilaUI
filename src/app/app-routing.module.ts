import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { MatTableComponent } from './mat-table/mat-table.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'mat',
    component:MatTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
