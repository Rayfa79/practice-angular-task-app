import { Component, Input, Output } from '@angular/core';
import { type Task } from './task.model'
import { EventEmitter } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input() task!: Task;
 @Output() complete = new EventEmitter<string>();

  onSelect() {
    this.complete.emit(this.task.id)
  }
}
