// Angular.
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

// Componentes.
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';

// Modelos.
import { State } from '../../core/models';

// Servicios.
import { IssuesService } from '../../core/services/issues.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IssueItemComponent, LabelsSelectorComponent],
  selector: 'app-issues-list',
  standalone: true,
  templateUrl: './issues-list.component.html',
})
export default class IssuesListComponent {
  public issuesService = inject(IssuesService);

  public get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  public get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  public onChangeState(newState: string) {
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);
  }
}
