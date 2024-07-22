import { Component,Input,computed,input,signal } from '@angular/core';






@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //allow property value to be settable from outside
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  //Using Signals for component input
  avatar = input.required<string>()
  name = input.required<string>()

//using signals computed to get image path
 imagePath = computed(()=> {
  return 'assets/users/' + this.avatar()
 })
//  get imagePath() {
//   return 'assets/users/' + this.avatar
//  }

  onSelectedUser() {
    
  }
}
