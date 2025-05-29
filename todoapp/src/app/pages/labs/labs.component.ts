import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [RouterOutlet, CommonModule],
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
  age = 30;
  id = 1;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = { job: 'Developer', department: 'Development', timeRole: 16, imgDev: 'https://www.w3schools.com/howto/img_avatar.png', vacation: 1 }

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
