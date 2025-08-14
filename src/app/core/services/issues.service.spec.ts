// Angular.
import { TestBed } from '@angular/core/testing';

// Librerías de terceros.
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';

// Modelos.
import { GitHubIssue, State } from '../models';

// Servicios.
import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  const queryClient = new QueryClient();
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideTanStackQuery(queryClient)],
      teardown: {
        destroyAfterEach: false,
      },
    });

    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load labels', async () => {
    const { data } = await service.labelsQuery.refetch();
    expect(data?.length).toEqual(30);

    const [label] = data!;

    expect(typeof label.color).toBe('string');
    expect(typeof label.default).toBe('boolean');
    expect(typeof label.description).toBe('string');
    expect(typeof label.id).toBe('number');
    expect(typeof label.name).toBe('string');
    expect(typeof label.node_id).toBe('string');
    expect(typeof label.url).toBe('string');
  });

  it('should set selected state, OPEN, CLOSED or ALL', async () => {
    service.showIssuesByState(State.Closed);
    expect(service.selectedState()).toBe(State.Closed);

    const { data } = await service.issuesQuery.refetch();

    data?.forEach((issue: GitHubIssue) => {
      expect(issue.state).toBe(State.Closed);
    });

    service.showIssuesByState(State.Open);
    const { data: dataOpen } = await service.issuesQuery.refetch();

    dataOpen?.forEach((issue: GitHubIssue) => {
      expect(issue.state).toBe(State.Open);
    });
  });

  it('should set selectedLabels', () => {
    service.toggleLabel('Accessibility');

    expect(service.selectedLabels().has('Accessibility')).toBeTrue();
  });

  it('should set selectedLabels and get issues by label', async () => {
    service.toggleLabel('Accessibility');

    expect(service.selectedLabels().has('Accessibility')).toBeTrue();

    const { data } = await service.issuesQuery.refetch();

    data?.forEach((issue: GitHubIssue) => {
      const hasLabel = issue.labels.some(
        (label) => label.name === 'Accessibility',
      );
      expect(hasLabel).toBeTrue();
    });
  });
});
