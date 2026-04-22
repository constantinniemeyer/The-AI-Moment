# Testing Instructions for Cleanup Branch

Dieses Dokument führt dich durch alle notwendigen Tests **vor** dem finalen PR merge.

---

## ✅ Checklist: Tests durchführen

Führe diese Tests **genau in dieser Reihenfolge** aus und häke ab, wenn grün:

---

### Phase 1: Lokale Builds (15 min)

#### Test 1.1: Local Build
```bash
cd /home/consti/AndroidStudioProjects/The-AI-Moment
make clean
make build-local
```
**Erwartet:** ✓ Build erfolgreich, keine Fehler
**Häkchen:** [ ]

#### Test 1.2: Integration Build
```bash
make clean
make build-integration
```
**Erwartet:** ✓ Build erfolgreich, baseurl sollte `/The-AI-Moment/staging` sein
**Prüfen:** `grep "baseurl" _site_staging/index.html` sollte Staging-Pfad enthalten
**Häkchen:** [ ]

#### Test 1.3: Production Build
```bash
make clean
make build-production
```
**Erwartet:** ✓ Build erfolgreich, baseurl sollte `/The-AI-Moment` sein
**Prüfen:** `grep "baseurl" _site_prod/index.html` sollte Production-Pfad enthalten
**Häkchen:** [ ]

---

### Phase 2: Datei-Integrität (5 min)

#### Test 2.1: SSH-Keys sollten NICHT im Repo sein
```bash
cd /home/consti/AndroidStudioProjects/The-AI-Moment
git status | grep -i "github"
```
**Erwartet:** ✓ Keine SSH-Keys in `git status` (sollten ignoriert sein)
**Häkchen:** [ ]

#### Test 2.2: Legacy Workflow ist gelöscht
```bash
ls -la .github/workflows/deploy.yml
```
**Erwartet:** ✗ Datei sollte NICHT existieren (not found)
**Häkchen:** [ ]

#### Test 2.3: Neue Workflows existieren
```bash
ls .github/workflows/
```
**Erwartet:** ✓ Sollte enthalten: `ci.yml`, `integration-deploy.yml`, `production-deploy.yml`
**Häkchen:** [ ]

---

### Phase 3: Config-Konsistenz (5 min)

#### Test 3.1: baseurl in _config.yml
```bash
grep "baseurl:" _config.yml
```
**Erwartet:** `baseurl: "/The-AI-Moment"`
**Häkchen:** [ ]

#### Test 3.2: baseurl in _config_integration.yml
```bash
grep "baseurl:" _config_integration.yml
```
**Erwartet:** `baseurl: "/The-AI-Moment/staging"`
**Häkchen:** [ ]

#### Test 3.3: Exclude-Regeln optimiert
```bash
grep -A 10 "exclude:" _config.yml
```
**Erwartet:** ✓ Sollte **NICHT** enthalten: `vendor/bundle/`, `vendor/cache/`, `vendor/gems/`, `vendor/ruby/`
**Häkchen:** [ ]

---

### Phase 4: Post-Frontmatter (5 min)

#### Test 4.1: Alle Posts haben Frontmatter
```bash
for f in _posts/*.md; do echo "=== $f ==="; head -2 "$f"; done
```
**Erwartet:** ✓ Jeder Post startet mit `---` und hat `layout: post`
**Häkchen:** [ ]

#### Test 4.2: Keine leeren oder malformed Posts
```bash
grep -c "layout: post" _posts/*.md | grep -v ":1$" | grep -v ":5$"
```
**Erwartet:** ✓ Keine Ausgabe (alle Posts haben genau ein `layout: post`)
**Häkchen:** [ ]

---

### Phase 5: Dokumentation (5 min)

#### Test 5.1: cleanup.md ist aktuell
```bash
grep -c "\[x\]" docs/cleanup.md
```
**Erwartet:** ✓ Mind. 7 Haken (durchgeführte Cleanups)
**Häkchen:** [ ]

#### Test 5.2: branching-ci-policy.md existiert
```bash
test -f docs/branching-ci-policy.md && echo "EXISTS" || echo "MISSING"
```
**Erwartet:** `EXISTS`
**Häkchen:** [ ]

#### Test 5.3: PR-Template existiert
```bash
test -f .github/pull_request_template.md && echo "EXISTS" || echo "MISSING"
```
**Erwartet:** `EXISTS`
**Häkchen:** [ ]

---

### Phase 6: Git Status (5 min)

#### Test 6.1: Branch ist `chore/code-cleanup`
```bash
git branch --show-current
```
**Erwartet:** `chore/code-cleanup`
**Häkchen:** [ ]

#### Test 6.2: Alle Änderungen sind committed
```bash
git status --porcelain
```
**Erwartet:** ✓ Leer oder nur untracked files (die ignoriert sein sollten)
**Häkchen:** [ ]

#### Test 6.3: Push ist erfolgreich
```bash
git log -1 --oneline
```
**Erwartet:** ✓ Zeigt deine letzten Commits
**Häkchen:** [ ]

---

## 🎯 Final Go/No-Go

**ALLE Tests bestanden?** → **GO** für PR

**Tests fehlgeschlagen?** → Welche?
- Gib mir die Fehlermeldung aus dem fehlgeschlagenen Test
- Ich werde es fixen
- Wir testen erneut

---

## ⚡ Quick-Befehl: Alle Tests auf einmal

Wenn du alles auf einmal prüfen willst:

```bash
cd /home/consti/AndroidStudioProjects/The-AI-Moment && \
echo "=== BUILD LOCAL ===" && make build-local && \
echo "=== BUILD INTEGRATION ===" && make build-integration && \
echo "=== BUILD PRODUCTION ===" && make build-production && \
echo "=== SSH KEYS ===" && git status | grep -i github || echo "OK: No SSH keys" && \
echo "=== LEGACY DEPLOY ===" && test ! -f .github/workflows/deploy.yml && echo "OK: Deleted" || echo "ERROR: Still exists" && \
echo "=== BASEURL PROD ===" && grep "baseurl: \"/The-AI-Moment\"$" _config.yml && echo "OK" && \
echo "=== BASEURL STAGING ===" && grep "baseurl: \"/The-AI-Moment/staging\"$" _config_integration.yml && echo "OK" && \
echo "=== CLEANUP DOC ===" && grep -c "\[x\]" docs/cleanup.md
```

---

## 📝 Nächste Schritte nach erfolgreichem Test

1. Sag mir: **"Alle Tests bestanden ✅"**
2. Ich erstelle den PR: `chore/code-cleanup -> integration`
3. Du reviewst die Änderungen im Browser
4. Merge!

---

**START MIT TEST 1.1** → Sag mir Bescheid wenn Test 1.1 bestanden ist ✓

