const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    core.setOutput('pr_title', github.context.payload.pull_request.title);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
