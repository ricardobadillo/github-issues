// Angular.
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

// Componentes.
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

// RXJS.
import { map, tap } from 'rxjs';

// Servicios.
import { IssueService } from '../../core/services/issue.service';

@Component({
  imports: [RouterLink, IssueCommentComponent],
  selector: 'app-issue',
  standalone: true,
  templateUrl: './issue.component.html',
})
export default class IssueComponent {
  private issueService = inject(IssueService);
  private route = inject(ActivatedRoute);

  public issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('number') ?? ''),
      tap((number: string) => this.issueService.setIssueNumber(number))
    )
  );

  public issueCommentsQuery = this.issueService.issueCommentsQuery;
  public issueQuery = this.issueService.issueQuery;
}
