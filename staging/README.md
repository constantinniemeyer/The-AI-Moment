# The AI Moment

Jekyll-Website fuer Artikel, Podcasts und Videos rund um AI.

## Deployment-Stages

1. **Local**: Seite lokal bauen/servieren fuer Entwicklung und Tests.
2. **Integration**: Automatisches Staging-Deployment nach `gh-pages/staging` bei Push auf `integration` und `main`.
3. **Production**: Automatisches Deployment der Live-Seite auf `gh-pages` (Root) bei Push auf `main`.

## Branch-Flow

- Feature-Arbeit auf `feature/*`
- Fehlerbehebungen auf `bugfix/*`
- Wartung auf `chore/*`
- Kritische Korrekturen auf `hotfix/*`
- Merge nach `integration` -> Integration Build + Deploy
- Merge von `integration` nach `main` -> Production Deploy

## Merging-Regeln (verbindlich)

- `integration` akzeptiert nur PRs aus `feature/*`, `bugfix/*`, `chore/*`, `hotfix/*`
- `main` akzeptiert nur PRs aus `integration` oder `hotfix/*`
- Keine Direkt-Pushes nach `integration` oder `main`
- CI-Checks `Validate Branching Rules` und `Build Site` muessen gruen sein

Details: `docs/branching-ci-policy.md`

## Lokale Entwicklung (out of the box)

### Voraussetzungen

- Ruby `3.2` (siehe `.ruby-version`)
- Bundler `2.4.x` (Lockfile kompatibel)
- Build-Tools fuer native Gems

Ubuntu/Debian:

```bash
sudo apt update
sudo apt install -y ruby ruby-dev ruby-bundler build-essential
```

macOS (Homebrew):

```bash
brew install ruby
```

### Projekt-Setup

```bash
cd /home/consti/AndroidStudioProjects/The-AI-Moment
make setup
```

### Lokal starten

```bash
make serve
```

### Lokale Build-Varianten

```bash
make build-local
make build-integration
make build-production
```

## GitHub Actions Workflows

- `.github/workflows/ci.yml`
  - PR-Checks auf `integration` und `main`
  - Erzwingt Branching-Regeln
- `.github/workflows/integration-deploy.yml`
  - Baut mit `_config.yml,_config_integration.yml`
  - Deployed nach `gh-pages/staging`
- `.github/workflows/production-deploy.yml`
  - Baut mit `_config.yml` (`JEKYLL_ENV=production`)
  - Deployed nach `gh-pages` Root
- `.github/workflows/deploy.yml`
  - Legacy-Workflow, nur manuell ausfuehrbar (`workflow_dispatch`)

## Konfiguration

- `_config.yml`: Basis-Konfiguration (Production-Defaults)
- `_config_integration.yml`: Staging-Overrides (z. B. `baseurl: /staging`, `show_drafts: true`)

## Repo-Hygiene

- Lokale Bundler- und Build-Artefakte sind in `.gitignore` ausgeschlossen (`.bundle/`, `vendor/bundle/`, `_site*`)
- Keine rechnerabhaengigen lokalen Pfade oder Root-Installationen erforderlich
