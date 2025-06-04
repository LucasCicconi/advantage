// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router'; // Importe RouterLink

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], // Adicione RouterLink aqui
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}
