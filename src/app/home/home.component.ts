import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html', // Aponta para home.component.html
  styleUrls: ['./home.component.scss'] // Aponta para home.component.scss (note o 's' em styleUrls)
})
export class HomeComponent {

}
