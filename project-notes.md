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

## Bugs
- [ ] Bug 1: Description of the bug and steps to reproduce
- [ ] Bug 2: Description of the bug and steps to reproduce

## Resources
- [Resource Name](URL)
- [Another Resource](URL)

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