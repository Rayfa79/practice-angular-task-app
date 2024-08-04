import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  newTitle = "";
  newDate = "";
  newSummary = "";

  onClose() {
    this.close.emit();
  }

  onSubmit(){
     this.add.emit({
      title: this.newTitle,
      summary: this.newSummary,
      dueDate: this.newDate
     })

}

}
