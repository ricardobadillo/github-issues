// Modelos.
import { GitHubIssue } from "../models";

// Utils.
import { sleep } from "../helpers";

// Variables de entorno.
import { environment } from "../../../environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueByNumber = async (issueNumber: string): Promise<GitHubIssue> => {
  await sleep(1500);

  try {
    const response = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    if (!response.ok) throw "Can't load issue";

    const issue: GitHubIssue = await response.json();
    return issue;

  } catch (error) {
    throw `Can't load issue ${issueNumber}`;
  }
};
