// Angular.
import { Injectable } from '@angular/core';

// Actions.
import { getIssues, getLabels } from '../actions';

// Librerías de terceros.
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({ providedIn: 'root' })
export class IssuesService {
  public labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  public issuesQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssues(),
  }));
}
