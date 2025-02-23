// Angular.
import { Component, inject } from '@angular/core';

// Componentes.
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';

// Servicios.
import { IssuesService } from '../../core/services/issues.service';

@Component({
  imports: [IssueItemComponent, LabelsSelectorComponent],
  selector: 'app-issues-list-page',
  standalone: true,
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  public issuesService = inject(IssuesService);

  public get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  public get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
}
