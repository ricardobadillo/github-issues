// Angular.
import { RouterOutlet } from '@angular/router';

// Componentes.
import { Component } from '@angular/core';

// Librerías de terceros.
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
  imports: [RouterOutlet, AngularQueryDevtools],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'github-issues';
}
