export interface GitHubIssue {
  active_lock_reason: null;
  assignee: User | null;
  assignees: Array<User>;
  author_association: AuthorAssociation;
  body: null | string;
  closed_at: null;
  comments_url: string;
  comments: number;
  created_at: Date;
  draft?: boolean;
  events_url: string;
  html_url: string;
  id: number;
  labels_url: string;
  labels: Array<Label>;
  locked: boolean;
  milestone: Milestone;
  node_id: string;
  number: number;
  performed_via_github_app: null;
  pull_request?: PullRequest;
  reactions: Reactions;
  repository_url: string;
  state_reason: null;
  state: State;
  timeline_url: string;
  title: string;
  updated_at: Date;
  url: string;
  user: User;
}

export interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: Type;
  url: string;
}

export enum Type {
  User = 'User',
}

export enum AuthorAssociation {
  Collaborator = 'COLLABORATOR',
  Contributor = 'CONTRIBUTOR',
  Member = 'MEMBER',
  None = 'NONE',
}

export interface Label {
  color: string;
  default: boolean;
  description: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

export interface Milestone {
  closed_at: null;
  closed_issues: number;
  created_at: Date;
  creator: User;
  description: string;
  due_on: null;
  html_url: string;
  id: number;
  labels_url: string;
  node_id: NodeID;
  number: number;
  open_issues: number;
  state: State;
  title: Title;
  updated_at: Date;
  url: string;
}

export enum NodeID {
  MDk6TWlsZXN0B25LMzA0NTk2Nw = 'MDk6TWlsZXN0b25lMzA0NTk2Nw==',
  MDk6TWlsZXN0B25LMzE0Mzg4MA = 'MDk6TWlsZXN0b25lMzE0Mzg4MA==',
}

export enum State {
  All = 'all',
  Closed = 'closed',
  Open = 'open',
}

export enum Title {
  Backlog = 'Backlog',
  NeedsTriage = 'needsTriage',
}

export interface PullRequest {
  diff_url: string;
  html_url: string;
  merged_at: null;
  patch_url: string;
  url: string;
}

export interface Reactions {
  '-1': number;
  '+1': number;
  confused: number;
  eyes: number;
  heart: number;
  hooray: number;
  laugh: number;
  rocket: number;
  total_count: number;
  url: string;
}
