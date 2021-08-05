Based on: [pr-branch-name](https://github.com/mdecoleman/pr-branch-name)

# Pull Request Branch Name

A github action that retrieves the pull request title and sets it in the output for other actions to use.

# Usage

```yaml
- uses: ramonsnir/gh-action-pr-title@1.0.0
  id: vars
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.vars.outputs.pr_title }}
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
