import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../service/task-service';

@Component({
  imports: [],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList implements OnInit {
  
  taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.listTask()
    //throw new Error('Method not implemented.');
  }

  

}
