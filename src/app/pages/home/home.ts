import { Component } from '@angular/core';
import { TaskCreate } from '../../components/task-create/task-create';
import { TaskList } from '../../components/task-list/task-list';

@Component({
  imports: [TaskCreate, TaskList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
