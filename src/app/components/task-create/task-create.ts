import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../service/task-service';
import { Task } from '../../interface/Task';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-task-create',
  styleUrl: './task-create.css',
  templateUrl: './task-create.html',
})
export class TaskCreate {

  taskService = inject(TaskService);

  fb: FormBuilder = inject(FormBuilder);

  formulario = this.fb.nonNullable.group(
    {
      id: [0, [Validators.required]],
      task: ['',[Validators.required]] 
    }
  )

  add(){

    if(this.formulario.invalid) return;

    let t: Task = {
      id: this.formulario.controls['id'].value,
      task: this.formulario.controls['task'].value
    }

    this.taskService.add(t);
  }

}
