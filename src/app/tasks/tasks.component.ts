import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) name?:string;
@Input({required: true}) userId!: string;
@Output() userName = new EventEmitter<string>();
isTaskAdded= false;

constructor(private taskService: TaskService){}

get selectedUserTasks() {
  return this.taskService.getUserTasks(this.userId);
}

onCompleteTask(id: string) {
  console.log(id)
 this.taskService.removeTask(id);
}

onAddTask() {
  this.isTaskAdded=  true;
}


onCloseTask() {
  this.isTaskAdded = false
}


}