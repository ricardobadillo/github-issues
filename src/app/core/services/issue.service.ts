// Angular.
import { Injectable, signal } from '@angular/core';

// Actions.
import { getIssueByNumber, getIssueCommentsByNumber } from '../actions';

// Librarías de terceros.
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({ providedIn: 'root' })
export class IssueService {
  private issueNumber = signal<string | null>(null);

  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  public issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  public setIssueNumber(issueId: string): void {
    this.issueNumber.set(issueId);
  }
}
