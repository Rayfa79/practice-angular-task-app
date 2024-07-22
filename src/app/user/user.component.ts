import { Component,Input,computed,signal } from '@angular/core';






@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //allow property value to be settable from outside
  @Input() avatar!: string
  @Input() name!: string

 get imagePath() {
  return 'assets/users/' + this.avatar
 }

  onSelectedUser() {
    
  }
}
