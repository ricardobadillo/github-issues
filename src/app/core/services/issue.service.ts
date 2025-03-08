// Angular.
import { inject, Injectable, signal } from '@angular/core';

// Actions.
import { getIssueByNumber, getIssueCommentsByNumber } from '../actions';

// Librarías de terceros.
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';

// Modelos.
import { GitHubIssue } from '../models';

@Injectable({ providedIn: 'root' })
export class IssueService {
  private issueNumber = signal<string | null>(null);
  private queryClient = inject(QueryClient);

  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
    staleTime: 1000 * 60 * 5,
  }));

  public issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
    staleTime: 1000 * 60 * 5,
  }));

  public setIssueNumber(issueId: string): void {
    this.issueNumber.set(issueId);
  }

  public prefetchIssue(issueId: string): void {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueId],
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5,
    });
  }

  public setIssueData(issue: GitHubIssue) {
    this.queryClient.setQueryData(['issue', issue.number.toString()], issue, {
      updatedAt: Date.now() + 1000 * 60,
    });
  }
}
