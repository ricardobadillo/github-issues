// Angular.
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Librerías de terceros.
import { provideMarkdown } from 'ngx-markdown';
import { provideAngularQuery, QueryClient } from '@tanstack/angular-query-experimental';

// Rutas de la aplicación.
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),

    provideAngularQuery(new QueryClient()),
    provideMarkdown(),
  ],
};
