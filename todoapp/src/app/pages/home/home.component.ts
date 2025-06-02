import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Tasks } from './../../models/task.models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  welcomeHome = 'Este es mi home!';
  tasks = signal<Tasks[]>([
    {
      id: Date.now(),
      title: 'Proyecto Angular',
      completed: false
    }
  ]);
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  clearInput() {
    if (this.newTaskCtr.valid) {
      const value = this.newTaskCtr.value;
      this.addTask(value);
      this.newTaskCtr.setValue('')
    }
  }

  toggleChecked(index: number) {
    this.tasks.update((value) =>
      value.map((task, position) => {
        if (position === index)
          return {
            ...task,
            completed: !task.completed,
          };
        return task;
      })
    );
  }

  addTask(title: string) {
    const newTask =
    {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTasks(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTaskEditingMode(index: number) {
    this.tasks.update((prevState) =>
      prevState.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true,
          };
        }
        return {
          ...task,
          editing: false,
        };
      })
    );
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.tasks.update((prevState) =>
      prevState.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false
          };
        }
        return task
      })
    );
  }

  newTaskCtr = new FormControl('',

    {
      nonNullable: true,
      validators: [
        Validators.required,
        control => {
          const value = control.value || '';
          return value.trim().length === 0 || value.startsWith(' ')
            ? { espacioInvalido: true }
            : null;
        }
      ]
    }

  );
}
