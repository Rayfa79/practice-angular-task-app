import { Component,Input,Output,computed,input,output,signal } from '@angular/core';
import { EventEmitter } from '@angular/core';






@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //allow property value to be settable from outside
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string
  @Input({required: true}) id!: string

  //create custom eventEmitter that emits data upon button click
  @Output() select = new EventEmitter<string>()
  //use output() function instead of decorator
  //select= output<string>()
  //Using Signals for component input
  // avatar = input.required<string>()
  // name = input.required<string>()

//using signals computed to get image path
//  imagePath = computed(()=> {
//   return 'assets/users/' + this.avatar()
//  })
 get imagePath() {
  return 'assets/users/' + this.avatar
 }

 //emit data from custom event to parent component
  onSelectedUser() {
    this.select.emit(this.id)
  }
}
