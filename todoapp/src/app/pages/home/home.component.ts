import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeHome = 'Este es mi home!';
  tasks = signal<string[]>([
    'Signal',
    'Interfaces y Typing',
    'Separacion de modulos',
  ]);
}
