// Modelos.
import { GitHubLabel } from "../models";

// Utils.
import { sleep } from "../helpers";

// Variables de entorno.
import { environment } from "../../../environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);

  try {
    const response = await fetch(`${BASE_URL}/labels`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    if (!response.ok) throw "Can't load labels";

    const labels: Array<GitHubLabel> = await response.json();
    return labels;

  } catch (error) {
    throw "Can't load labels";
  }
};
