# Branching and CI Policy

This repository uses a staged delivery flow:

1. `feature/*`, `bugfix/*`, `chore/*`, `hotfix/*` -> `integration`
2. `integration` -> `main`
3. `main` deploys production

## Branch Rules

- `integration`
  - Accepts PRs only from:
    - `feature/*`
    - `bugfix/*`
    - `chore/*`
    - `hotfix/*`
- `main`
  - Accepts PRs only from:
    - `integration`
    - `hotfix/*`

These rules are validated by `.github/workflows/ci.yml`.

## Merge Rules

- No direct pushes to `integration` or `main`
- PR required for all merges
- Required status checks:
  - `Validate Branching Rules`
  - `Build Site`
- At least 1 approving review for `integration`
- At least 1-2 approving reviews for `main` (team decision)
- Resolve all conversations before merge
- Recommended merge strategy: **Squash merge**

## Deployment Rules

- `integration-deploy.yml`
  - Runs on push to `integration` and `main`
  - Deploys staging site to `gh-pages/staging`
- `production-deploy.yml`
  - Runs on push to `main`
  - Deploys production site to `gh-pages` root

## GitHub Settings Checklist

Configure branch protection or rulesets for `integration` and `main`:

- Require a pull request before merging
- Require approvals
- Require status checks to pass
- Require conversation resolution
- Restrict who can push (or fully block direct pushes)
- Optional: require linear history

## Emergency Hotfix Path

- Branch from `main` as `hotfix/<name>`
- Open PR to `main`
- After merge to `main`, back-merge to `integration`

