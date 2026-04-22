# Cleanup & Maintenance Checklist

Dieses Dokument dokumentiert regelmäßige Cleanup- und Wartungsaktivitäten fuer das The-AI-Moment-Repo.

## Zweck
- Code-Qualitaet sicherstellen
- Deprecated Code entfernen
- Technische Schulden reduzieren
- Komplexitaet minimieren
- Dokumentation up-to-date halten

---

## Durchgeführte Cleanups

### 2026-04-22: Initial Code Cleanup
- [x] SSH-Keys zu `.gitignore` hinzugefügt (`githubSSHKey*`)
- [x] Build-Artefakte in `.gitignore` präzisiert (`_site_*`, `.jekyll-cache/`)
- [x] Legacy `deploy.yml` Workflow entfernt (redundant mit neuen `integration-deploy.yml` + `production-deploy.yml`)
- [x] `_config.yml` optimiert (redundante `vendor/*` exclude-Regeln entfernt)
- [x] Frontmatter-Konsistenz aller Posts überprüft (✓ konsistent)
- [x] CSS/JS Code-Quality überprüft (✓ sauber und minimal)
- [x] Alle Layouts/Includes sind referenziert (✓ keine Duplikate/Orphans)

---

## 1. Code-Cleanup

### 1.1 Jekyll-Konfiguration (`_config.yml`, `_config_integration.yml`)
- [x] `site.url` und `site.baseurl` mit Project-Pages-Pfaden abgeglichen (`/The-AI-Moment`, `/The-AI-Moment/staging`)
- [ ] Ungenutzte Plugins entfernen oder aktivieren
- [ ] Veraltete Liquid-Filter/Tags pruefen
- [ ] Redundante Eintraege in `defaults` entfernen
- [ ] `exclude`-Regeln auf Notwendigkeit pruefen

### 1.2 Layout/Include-Dateien (`_layouts/`, `_includes/`)
- [ ] Nicht referenzierte Layouts loeschen
- [ ] Duplikate in Includes aufloesen
- [ ] HTML-Attribute auf Accessibility pruefen (alt-tags, labels, etc.)
- [ ] CSS-Klassen-Konsistenz pruefen

### 1.3 CSS (`assets/css/main.css`)
- [x] CSS-Review durchgefuehrt - sauber, gut strukturiert
- [ ] Ungenutzte CSS-Regeln entfernen (grep nach Klassen in Layouts)
- [ ] Duplikate/Ueberschreibungen konsolidieren
- [ ] Vendor-Prefixes aktualisieren (z. B. `-webkit-`, `-moz-`)

### 1.4 JavaScript (`assets/js/main.js`)
- [x] JS-Review durchgefuehrt - minimal, fokussiert auf Mobile Nav Toggle
- [ ] Ungenutzte Funktionen entfernen
- [ ] Globale Variablen minimieren
- [ ] Error-Handling ueberpruefen

### 1.5 Markdown-Content (`*.md`, `_posts/`)
- [ ] Veraltete/archivierte Posts als Draft markieren statt loeschen
- [ ] Broken Links/References finden (z. B. via `grep`)
- [ ] Frontmatter-Konsistenz (alle Posts sollten `layout`, `title` haben)
- [ ] Unnoetige `draft: true` Flags entfernen
- [ ] Duplikate Inhalte zusammenfassen

---

## 2. Workflow & Deployment Cleanup

### 2.1 GitHub Actions Workflows (`.github/workflows/`)
- [x] `actions/checkout@v4` -> `actions/checkout@v5` in allen Workflows
- [x] Concurrency-Gruppen harmonisiert (`gh-pages-deploy`)
- [x] Legacy `deploy.yml` entfernt
- [ ] Veraltete Actions upgraden (z. B. `actions/checkout@v5` -> `v6`)
- [ ] Node.js/Ruby-Versionen mit aktuellen LTS vergleichen
- [ ] Timeouts auf realistisch setzen (nicht zu kurz, nicht zu lang)
- [ ] Secrets & Token-Scopes minimal halten

### 2.2 Deploy-Flows (`integration-deploy.yml`, `production-deploy.yml`)
- [x] Concurrency serialisiert (verhindert `gh-pages` Ref-Lock-Race)
- [x] Environment-Gates aktiviert (`integration`, `production`)
- [ ] Redundante Build-Steps konsolidieren
- [ ] `keep_files: true` Policy ueberpruefen (Speicher-Wachstum)

### 2.3 Branching Policy
- [x] Branch-Policy-Validierung in `ci.yml` implementiert
- [ ] Verwaiste Branches aufloesen (`git branch -r` pruefen)
- [ ] Branch Naming Conventions nochmal pruefen

---

## 3. Dokumentation Cleanup

### 3.1 README.md
- [x] URLs auf Project-Pages abgeglichen (`/The-AI-Moment/`, `/The-AI-Moment/staging/`)
- [x] Setup-Schritte gegen `Makefile` abgeglichen
- [ ] Typos beheben
- [ ] Links auf interne Docs pruefen
- [ ] Versionsnummern aktualisieren (Ruby, Bundler, Actions)

### 3.2 Docs/
- [x] `cleanup.md` erstellt (diese Datei)
- [x] `branching-ci-policy.md` dokumentiert
- [ ] Veraltete technische Entscheidungen archivieren

### 3.3 Templates
- [x] `.github/pull_request_template.md` erstellt
- [ ] Ungenutzte Issue-Templates loeschen

---

## 4. Dependencies Cleanup

### 4.1 Gemfile / Bundler
- [x] Gemfile reviewed - minimal und auf GitHub-Pages optimiert
- [ ] `gem list` durchgehen, ungenutzte Gems entfernen
- [ ] Gem-Versionen pruefen auf Sicherheitsupdates (`bundle audit`)
- [ ] GitHub-Pages-Kompatibilitaet verifizieren

### 4.2 .gitignore
- [x] SSH-Keys hinzugefuegt
- [x] Build-Artefakte praezisiert
- [ ] Veraltete Ignore-Regeln entfernen

---

## 5. Build & Performance Cleanup

### 5.1 Jekyll Build
- [ ] `jekyll build --profile` ausfuehren und Performance-Bottlenecks identifizieren
- [ ] Ungenutzte Collections entfernen
- [ ] Plugin-Load-Zeit pruefen
- [ ] `_site` Groesse kontrollieren (sollte < 50MB sein fuer Pages)

### 5.2 Image & Asset Optimization
- [ ] Bilder komprimieren (PNG/JPG -> AVIF/WebP wenn moeglich)
- [ ] Ungenutzte Assets loeschen
- [ ] CDN/Caching Headers pruefen

---

## 6. Testing & Validation Cleanup

### 6.1 Lokale Tests
- [ ] `make build-local` fehlerfrei ausfuehren
- [ ] `make build-integration` pruefen
- [ ] `make build-production` testen
- [ ] Staging + Production URLs testen (keine 404)

### 6.2 CI/CD Validation
- [ ] Letzte 5 Action-Runs pruefen (erfolg = gruen?)
- [ ] Failure-Logs reviewen
- [ ] Flaky Tests / Timeouts dokumentieren

---

## 7. Regelmäßige Wartung (Quarterly)

### 7.1 Dependency Updates
```bash
bundle update
gem update
```

### 7.2 Workflow Action Updates
```bash
# Manually check:
# - actions/checkout@vX
# - ruby/setup-ruby@vX
# - peaceiris/actions-gh-pages@vX
```

### 7.3 Ruby/Node Version Check
- [ ] Lokales `.ruby-version` auf aktuellsten Patch aktualisieren
- [ ] GitHub Actions `ruby-version` abgleichen

---

## 8. Archive & Deprecation

### 8.1 Deprecated Code
Wenn Code deprecated wird:
1. Commit mit `chore: deprecate <feature>` aufnehmen
2. In `docs/cleanup.md` dokumentieren
3. Mit Removal-Zieldatum versehen (z. B. "Remove after 2026-Q3")

### 8.2 Historic Docs
- [ ] Alte Release Notes archivieren (`docs/archive/`)
- [ ] Breaking Changes dokumentieren (`CHANGELOG.md`)

---

## How to Use This Checklist

1. **Copy-Paste für neue Cleanup-Branch:**
   ```bash
   git checkout -b chore/cleanup origin/integration
   ```

2. **Pro Item durchgehen:**
   - [ ] Abhaken, wenn erledigt
   - Kommentar schreiben, falls nicht zutreffend

3. **Commit nach jedem Abschnitt:**
   ```bash
   git add .
   git commit -m "chore: cleanup section-X (beschreibung)"
   ```

4. **Am Ende: PR erstellen** zur Review

---

## Timing

| Frequenz | Aufgaben |
|----------|----------|
| **Nach jedem Release** | Abschnitte 1-3 (Code, Workflows, Docs) |
| **Monatlich** | Abschnitt 5-6 (Build Performance, CI/CD) |
| **Quarterly** | Abschnitte 4, 7 (Dependencies, Updates) |
| **Jährlich** | Abschnitt 8 (Archive & Deprecation) |

---

## Kontakt / Fragen

Falls während des Cleanup Unklarheiten entstehen:
- Vor Loeschen immer in git-history pruefen (z. B. `git log -p <file>`)
- Dokumentieren, warum etwas geaendert wurde
- Bei Breaking Changes: CHANGELOG aktualisieren
