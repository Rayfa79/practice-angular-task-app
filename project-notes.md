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
- [Meeting Notes](#meeting-notes)


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
-      c. set prop equal to computed which takes in function
-      d. return computed value in function body
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

## Resources
- [Resource Name](URL)
- [Another Resource](URL)


### Meeting Date: YYYY-MM-DD
#### Attendees
- Person 1
- Person 2

#### Discussion Points
1. Point 1
2. Point 2

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