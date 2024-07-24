# Project Notes

## Overview
Angular the complete guide 2024 edition: Task-App

## Table of Contents
- [Getting Started](#)
- [Adding New Components][(#)]
- [string interpolation](#string)
- [property binding](#propery)
- [using getters for computed value](#propery)
- [changing state of UI (old way- zone.js)](#propery)

- [changing the state of UI (new way: Signals)](#signals)
- [Defining Component Inputs](#meeting-notes)
- [Required and optional inputs](#meeting-notes)
- [Using Signal inputs instead of @Input](#meeting-notes)

## Notes: Section 2: Angular Essentials- Components, Templates, Services & More
- [Getting Started](#)
- [Adding New Components][(#)]
- [string interpolation](#string)
- [property binding](#propery)
- [using getters for computed value](#propery)
- [changing state of UI (old way- zone.js)](#propery)

- [changing the state of UI (new way: Signals)](#signals)
- [Defining Component Inputs](#meeting-notes)
- [Required and optional inputs](#meeting-notes)
- [Using Signal inputs instead of @Input](#meeting-notes)
- [How to emit your own events w/ @Output ](#meeting-notes)
- [More modern approach using output function](#meeting-notes)
- [Using Signal inputs instead of @Input](#meeting-notes)
- [38. Working w/potentially undefined values and union types](#meeting-notes)
- [39. Accepted OBJECTS as inputs and adding its type INLINE](#meeting-notes)
- [40. Adding objects TYPES as an type alias OR INTERFACE](#meeting-notes)
- [41. Outputting List Content @for(user of users){} MODERN WAY](#meeting-notes)
- [42. Ouputting Conditional Content](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)
- [43. Legacy Angular: ngFor and ngIf](#meeting-notes)

## Getting Started
- create new app: ng new ____
- create new components: ng g c ____
- if cloning repo: npm install (install modules)
- run server: ng serve
- [ ] Task 2
- [x] Completed task

## Adding New Components
- ng g c header
- import header into component where being used
- add to imports array
- Idea 2: Brief description

## String Interpolation
- a One-way Data-Binding technique that is used to transfer the data from a TypeScript - code to an HTML template (view)
- {{ selectedUser }}

## Property Binding
- Property binding moves a value in one direction, from a component's property into a target element property
- <img [src]= "property name goes here">
- DEFINE PROPERTY IN COMPONENT CLASS: @Input({required:true}) avatar!: string
- the avatar property has an Input() which makes it settable from the outside
- Input() has the required option which means it MUST be set from the outside
- will get error in IDE if forget to set required property

## Using Getters For Computed Value
- when using string interpolation or property binding we can compute the value to be displayed
- We do NOT want to do this in the template!
- Instead use a GETTER in the component class that will return the value
- Example: <img [src]= " 'assets/users/' + selectedUser. avatar">
- INSTEAD: in class add: 
- get imagePath() {
      return 'assets/users/' + this.avatar
 }
- and in template just add: <img [src]="imagePath" [alt]="name">

## Changing State of UI the old way
-  Task: you want to change name of button when clicking a button element
-  STEPS:
-  1. add click event to button: <button (click)="onClick()"> {{ avatar.name }}
-  2. add an onClick method to component class 
-  3. export class UserComponent {
        selectedUser = avatar.name
    onClick() {
        this.selectedUser = avatar.name[4]
    }
}
-  4. In template the avatar name will be changed upon click usine ZONE.js


## Signal
- IMPORT signal function from angular/core
- create signal value and store in property within class
- call set method on property when want to change properties value
- TO GET VALUE OF SIGNAL PROPETY IN THE TEMPLATE: when calling property add an elipisis
- TO GET COMPUTED VALUES: don't USE GETTERS:
-      a. import computer function from angular/core
-      b. create variable for prop you want computed
-           selectedUser = signal(value you want to change)
-      c. If you want a value in the template computed add this in component
           imagePath= computed( ()=> 'assets/users/' + this.selectedUser().avatar)
-      d. return computed value in function body
-      e. To change the value upon click event
-          1. in click event function you must SET the proprety to be changed
-          2. this.selectedUser.set( value you want to change to)
-      e. READ computed value in template by adding prop(w/out brackets)..add elipsis


## Defining component inputs ( Required and optional inputs)
- component class properties can be SET from the outside (parent component has the data)
- To do this inport INPUT
- Add @Input({required: true})avatar!: string
- The above avatar property will be settable from the outside now
- You can add an optional require: true property in the Input()this will through and error if not used in the template
- the exlamation point is used so an error will NOT be thrown (expects a string)
- Use typscript to tell Angular the data type to be expected
- if require property not added then the property will be optional in template


## Using Signal for inputs instead of @Input
- import input...not INPUT(this is a decorator and used w/old @Input())
- set property EQUAL to input().....avatar= input() ...this produces a Signal
- add the typescript generic type that will be expected: avatar = input<string>()
- you may also make the input REQUIRED: avatar = input.required<string>()
- you can set an INITAL value for the input: avatar = input('') (this sets as a string)
- in the COMPONENT CLASS where the signal is being set just set up the property like normal!
-  <app-user [avatar]="user" />
-  exports class AppCompoenent{
       user= DUMMY-Data
}
- In the TEMPLATE of the signal property you must call the signal property
-     <span>{{ avatar() }}
- Remember for computed values dont user getters rather computed!!!!
- imagePath = computed(()=> {
    return 'assets/users' + this.avatar()
})
- to execute image path in template: <img [src]= imagePath()>
- TIP: when using input signals they are read ONLY from in the component you may not use set() to change them like we can with regular SIGNALS
- TIP: this project will not use signals input instead @Input decorator!


### How to emit your own events w/ @Output 
- Task: we want to output data from one component to another when button clicked
- let app component know when a button is clicked in user template then output that data
- STEPS: 
- 1. We want to send(output) data to another comp. when a button is clicked
- 2. Create a property w/@Output decorator and set to new EventEmitter()
-    a. @Output() select = new EventEmitter()
-    b. make sure to set it comp. class
- 3. Create a click event and set equal to a method (anyname)
-    a. we will now send the select eventEmitter when the button is clicked
-    b. <button (click)= "onSelectUser()>
- 4. Create a method that will use select property to emit a new value
-    1. Max said you do not have to pass in a value. test to see whats emitted then
-    2. Max passed a value into emit
-       a. this.select.emit(this.id)
-       b. in the comp. class create an @Input property called id that will be set from outside:   @Input({required: true}) id!: string
-       c. this is the value that we will emit to the parent component when clicked
-       d. this.select.emit(this.id)
- 5. In the parent component template: in the app-user set [id]="property value in parent  comp."
-      a. <app-user [id]="users[2].name" />
- 6. In parent component use eventBinding on @Output property to listen to custom event
-    a. <app-user (select)="add name of method that will receive event">
-    a. <app-user (select)="onSelect($event)"/>
-    b. create a method in parent comp. that will receive the eventEmitter data
-    c. onSelect(id: string) {

}
#### More modern approach using output function
- instead of using @Output() decorator use output() function
- inport output (lowercase)
- create a property where you want data outputted
- set equal to output()
-         select = output<string>().....behind hood include new Eventemitter
- Next, output the select event in the click event method
- onSelectUser() {
    select.emit(this.id)
}
- use eventBinding in appComp template as usual 
- <app-user (select)="onSelectUser($event)" />
- Person 2

#### 38. Working w/potentially undefined values and union types
- If a value is returned that could POSSIBLY be undefined you will get a runtime error
- In the terminal: ✘ [ERROR] NG2: Object is possibly 'undefined'. [plugin  angular-compiler]
- or in the template: "property name has no initialzer.......
- SOLUTION: add ? after property (tells typscript value will be string or undefined
-      exp: @Input() name?: string
-      exp: <app-header [name]="selectedUser?.name"> (if selected user then add value if 
-                                                      not add undefined)
-      exp: <app-header [name]="selectedUser ? selectedUser.name: '' ">
-      means if there is a selected user then return the name else return empty string
- You may also add an ! after propety or function to let know there will be a non 
-  undefined value
- ALTERNATIVE TO USING QUESTION MARK! using a UNION TYPE
-     exp: @Input() name: string | undefined
- TIP: remove required: true if theres a possibility of getting an undefined value!!!
-    exp: @Input(required: true) name!: string (! tells TS there will definitly be value
-                                                 returned)
-    exp: remove and add: @Input() name?: string or @Input() name: string | undefined;

#### 39. Accepted OBJECTS as inputs and adding its type INLINE
- You can accept an OBJECT as an input
- You must give each of the objects properties a TYPE
- @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string
}
- Make sure to add ! to tell TS the object will DEFINITELY be defined
- make sure to adjust the properties in the template to use USER.name, ect
- TIP: its preferred to use an INTERFACE for the object type instead of inline!

#### 40. Adding objects TYPES as an type alias OR INTERFACE]
- In component BELOW IMPORTS add a type alias OR Interface for object types:
- TYPE ALIAS
- type User = {
    id: string;
    avatar: string;
    name: string
}
- INTERFACE
- interface User {
    id: string;
    avatar: string;
    name: string;
}
- To use in the class:
-    @Input({required: true}) user!: User

#### 41. Outputting List Content @for(user of users){} MODERN WAY
1. DYNAMICALLY outputting a list of content
2. MODERN WAY: @for( user of users (this is a property in the component)){add list you
                                               want dynamically added here}
3. You may also TRACK each list item using a property
-           exp: track user.id
-    @for(user of users; track user.id) {
        <li>
           <app-user [user]="user" (onSelect)="$event" />
        </li>  
}


#### 42- Outputting Conditional Content
- USE CASE: only render tasks component if there is a selectedUser: else add text
- use @if(conditional){elements you want rendered} optional else if or else clause
- example:  @if(selectedUser) {
        <app-tasks [name]="selectedUser.name"/>
}@else {
    <p id="fallback">Please Select a User
</p>}
- [ ] Action 2: Assigned to Person

#### 43- Legacy Angular: ngFor and ngIf
- ngFor and ngIf are STRUCTURAL DIRECTIVES
- TO USE: IMPORT into comp. where being used. also add to IMPORTS ARRAY in comp.
- SYNTAX: <li *ngFor = " let user of users">: add to element you want repeated!
- ngIf: Add w/in tag of element or component that you want conditional rendered.
- SYNTAX: <app-tasks *ngIf = "selectedUser; else fallback" [name]="selectedUser!.name">
- TO ADD ELSE CLAUSE: <ng-template #fallback> <p id="fallback">Select a user to see their tasks!</p> </ng-template>

#### 44 & 45: Adding a Task Component & Outputting User Specific Tasks
- Create task component and add INSIDE TASKS component:  ng g c tasks/task --skip-tests
- Add <app-task> to TASKS TEMPLATE
- Add dummy task data to Parent Tasks component. Will be an array of task objects
- GOAL: To display a single users tasks when a user is clicked. We will NEED THE USERS ID
- STEPS: 
- 1. In tasks component: GET users ID from the app component
- @Input({required:true}) id?: string
- Once we have that id we should FILTER the TASKS array and only RETURN an filtered TASKS array if the tasks.userId === this.id
- get selectedUserId() { this.tasks.filter(task) task.userId === this.id}
- NOW TO DISPLAY ONLY THE TASK THAT MATCHES THE ID
- 1. In app component template: in the <app-tasks [id]="getter method that finds http data id that matchs id (tasks)">. THIS GETS USER ID THAT IS CLICKED AND PASSES TO TASKS COMP.
- 2. YAY not the tasks component has the current id and can use its gettter method to ONLY return the task w/the id that matches the id from the app component
- 3. @for(task of (ADD NAME OF GETTER METHOD IN TASKS COMPONENT);  track task.id) { <li> <app-task /> </li>}
- [ ] Action 2: Assigned to Person

#### 46. Passing Task Data to <app-task> component thats made available in the for loop! And using that data in the task component
- In task template we want to output the task name, time, and summary
- So in task component add a @Input property that accepts ENTIRE task OBJECT from the outside and pulls out only the property needed
- FIRST create an interface or type object that will shape the expected data
- type Task = {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}
- or: interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}
- @Input({required: true}) task!: Task


- NEXT, in tasks component BIND this new task property (from task comp.) to the task OBJECT thats recieved from tasks component
- <ul>
     @for( task of seelctedUserTasks; track task.id) {
        <li>
           <app-task [task]="task" />
        </li>
     }
- You can now EXTRACT the needed properties in order to display that data in the TASK TEMPLATE!!!
- <h2>{{task.title}} </h2>
- <time>{{task.dueDate}} </time> ect

#### 47. Storing Data Models in separate files
- Outsource data interfaces and type definitions into a separate Model file
- Add this file in the FOLDER for the which the data model belongs
- CREATE: task.model.ts
- in the file create then EXPORT the interface
- IMPORT the model in the comp. where its being used: you may OPTIONALY add the word type in front of the User
- import { type User } from './user.model'

#### Action Items
- [ ] Action 1: Assigned to Person
- [ ] Action 2: Assigned to Person

#### Action Items
- [ ] Action 1: Assigned to Person
- [ ] Action 2: Assigned to Person

#### Action Items
- [ ] Action 1: Assigned to Person
- [ ] Action 2: Assigned to Person

#### Action Items
- [ ] Action 1: Assigned to Person
- [ ] Action 2: Assigned to Person

#### Action Items
- [ ] Action 1: Assigned to Person
- [ ] Action 2: Assigned to Person

---

## Code Snippets
```python
# Example code snippet
def hello_world():
    print("Hello, World!")

[def]: #ideas