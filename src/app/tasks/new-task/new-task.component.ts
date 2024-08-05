import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true}) userId!: string;
  newTitle = "";
  newDate = "";
  newSummary = "";

  constructor(private taskService: TaskService){}

  onClose() {
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.newTitle,
      summary: this.newSummary,
      dueDate: this.newDate
    },
    this.userId
  );
    this.close.emit()
}

}
