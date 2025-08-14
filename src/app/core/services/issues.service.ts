// Angular.
import { Injectable, signal } from '@angular/core';

// Actions.
import { getIssues, getLabels } from '../actions';

// Librerías de terceros.
import { injectQuery } from '@tanstack/angular-query-experimental';

// Modelos.
import { State } from '../models';

@Injectable({ providedIn: 'root' })
export class IssuesService {
  public selectedLabels = signal(new Set<string>());
  public selectedState = signal<State>(State.All);

  public labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  public issuesQuery = injectQuery(() => ({
    queryKey: [
      'issues',
      {
        state: this.selectedState(),
        selectedLabels: [...this.selectedLabels()],
      },
    ],
    queryFn: () => getIssues(this.selectedState(), [...this.selectedLabels()]),
  }));

  public showIssuesByState(state: State) {
    this.selectedState.set(state);
  }

  public toggleLabel(label: string) {
    const labels = this.selectedLabels();

    if (labels.has(label)) {
      labels.delete(label);
    } else {
      labels.add(label);
    }

    this.selectedLabels.set(new Set(labels));
  }
}
