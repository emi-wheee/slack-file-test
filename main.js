import * as slack from '@slack/web-api';

const token = 'xoxb-redacted-redacted-redacted';
const channel_id = 'Dredacted';

const slackClient = new slack.WebClient(token);
await slackClient.files.uploadV2({
  content: 'test file',
  filename: 'testfile.txt',
  channel_id,
  initial_comment: '<http://example.com|mrkdwn link>',
});

