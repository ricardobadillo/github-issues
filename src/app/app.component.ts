// Angular.
import { RouterOutlet } from '@angular/router';

// Componentes.
import { Component } from '@angular/core';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'github-issues';
}
