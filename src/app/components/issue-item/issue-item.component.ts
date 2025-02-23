// Angular.
import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Modelos.
import { GitHubIssue, State } from '../../core/models';

@Component({
  imports: [NgStyle, RouterLink],
  selector: 'issue-item',
  standalone: true,
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  public issue = input.required<GitHubIssue>();

  public get isOpen() {
    return this.issue().state === State.Open;
  }
}
