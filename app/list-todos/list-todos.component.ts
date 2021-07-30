import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
    ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {




  todos = [

    new Todo (1, 'Learn to upgrade Python Skills', false, new Date()),
    new Todo (2, 'Learn to upgrade Angular Skills', false, new Date()),
    new Todo (3, 'Learn to upgrade Spring Skills', false, new Date()),
    new Todo (4, 'Learn to upgrade React Skills', false, new Date()),
    new Todo (5, 'Learn to upgrade Rails Skills', false, new Date()),
    // {id : 1, description: 'Learn Python'},
    // {id : 2, description: 'Learn Angular'},
    // {id : 3, description: 'Learn Spring'}
  ]
   constructor() { }

  ngOnInit(): void {
  }

}
