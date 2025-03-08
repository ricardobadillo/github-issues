// Angular.
import { NgStyle } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Modelos.
import { GitHubIssue, State } from '../../core/models';

// Servicios.
import { IssueService } from '../../core/services/issue.service';

@Component({
  imports: [NgStyle, RouterLink],
  selector: 'issue-item',
  standalone: true,
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  public issue = input.required<GitHubIssue>();
  private issueService = inject(IssueService);

  public get isOpen(): boolean {
    return this.issue().state === State.Open;
  }

  public prefetchData(): void {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
