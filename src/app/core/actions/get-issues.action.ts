// Modelos.
import { GitHubIssue, State } from '../models';

// Utils.
import { sleep } from '../helpers';

// Variables de entorno.
import { environment } from '../../../environments/environment.development';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async (
  state: State = State.All,
  selectedLabels: Array<string>,
): Promise<Array<GitHubIssue>> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const response = await fetch(`${BASE_URL}/issues?${params}`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    if (!response.ok) throw "Can't load issues";

    const issues: Array<GitHubIssue> = await response.json();
    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
