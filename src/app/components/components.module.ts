import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTaskComponent } from './input-task/input-task.component';
import { FormsModule } from '@angular/forms';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [
    InputTaskComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
  ],
  exports: [
    InputTaskComponent,
    TasksListComponent,
  ]
})
export class ComponentsModule { }
