// Utils.
import { getIssueByNumber } from "./get-issue-by-number.action";

// Variables de entorno.
import { environment } from "../../../environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;
const issueNumber = '12345';
const mockIssue = { id: 12345, number: issueNumber, body: '# Hola mundo' };

describe('Get issue by number action', () => {
  it('should fetch issue successfully', async () => {
    const requestUrl = `${BASE_URL}/issues/${issueNumber}`;
    const issueResponse = new Response(JSON.stringify(mockIssue), {
      status: 200,
      statusText: 'OK',
    });

    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    const issue = await getIssueByNumber(issueNumber);
    expect(window.fetch).toHaveBeenCalledWith(requestUrl, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });
  });

  it('should not fetch issue successfully', async () => {
    const issueResponse = new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    try {
      const issue = await getIssueByNumber(issueNumber);
      expect(true).toBeFalse();
    } catch (error) {
      expect(error).toBe(`Can't load issue ${issueNumber}`);
    }
  });
});
