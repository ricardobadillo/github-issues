// Angular.
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Librerías de terceros.
import { MarkdownModule } from 'ngx-markdown';

// Modelos.
import { GitHubIssue } from '../../core/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownModule],
  selector: 'app-issue-comment',
  standalone: true,
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  public issue = input.required<GitHubIssue>();
}
