import { Component,Input,Output,computed,input,output,signal } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

//Use interface or type alias for object types
interface User {
  id: string;
  avatar: string;
  name: string;
}

//optional alias type
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //allow property value to be settable from outside
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  // @Input({required: true}) id!: string
  //refactor the above Inputs to use Object instead of individual properties
  @Input({required: true}) users!: User;
  @Input({required: true}) selected!: boolean;

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
  return 'assets/users/' + this.users.avatar
 }

 //emit data from custom event to parent component
  onSelectedUser() {
    this.select.emit(this.users.id)
  }
}
