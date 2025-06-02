import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcomeLabs = 'Este es mi labs!';
  tasks = signal<string[]>([
    'Modulo uno',
    'Rutas',
    'Separacion de modulos',
  ]);
  name = 'Pedro Castro';
  timeRole = 50;
  id = 1;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  colorCtr = new FormControl();
  widthCtr = new FormControl(50, {
    nonNullable: true
  });
  nameCtr = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  });

  constructor() {
    this.colorCtr.valueChanges.subscribe(value => { console.log(value) })
  }

  person = { job: 'Developer', department: 'Development', age: 16, imgDev: 'https://www.w3schools.com/howto/img_avatar.png', vacation: 1 }

  clikHandler() {
    alert('Alerta Angular')
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }
}
