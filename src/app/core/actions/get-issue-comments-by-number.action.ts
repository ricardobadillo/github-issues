// Modelos.
import { GitHubIssue } from "../models";

// Utils.
import { sleep } from "../helpers";

// Variables de entorno.
import { environment } from "../../../environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueCommentsByNumber = async (issueNumber: string): Promise<Array<GitHubIssue>> => {
  await sleep(1500);

  try {
    const response = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    if (!response.ok) throw "Can't load issues";

    const issues: Array<GitHubIssue> = await response.json();
    return issues;

  } catch (error) {
    throw "Can't load issues";
  }
};
