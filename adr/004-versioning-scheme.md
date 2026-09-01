# ADR 004: Repository Versioning Scheme

- **Status:** Accepted
- **Date:** 2026-08-31
- **Deciders:** Adnan Slamet Wibowo

## Context

Nanoo has many repos. Some ship libraries that other software uses. Others are
services or sites, where the version is only label. So each repo need different
versioning rule.

## Decision

We pick the versioning rule by repo type:

- **Libraries** (`css`, the `app` monorepo, `cdn`, `webrings`, `kaomoji` as single version) → **SemVer** (`v2.2.4`).
  users install them with ranges like `^2.2.0`, so CalVer (which jumps a full year)
  would be unsafe.
- **Services / sites / data** → **CalVer** (`v2026.07.30`) for **fresh or unsettled**
  repos (`docs`, ...). No one uses a range on these, so the version is just a label.
  A service already at a stable SemVer (e.g. `cdn` at `v2.2.6`) stays SemVer — switching
  would reset its version history. The roll-out is per-repo, not a blanket cutover.
- **`actions` repo** → bare major tag (`v2`), like `actions/checkout@v4`.
- **Prereleases** (`alpha`, `beta`, `rc`) are folded into the next stable release.
  `ignore_tags = "alpha|beta|rc|dev|next"` does this, so `--latest` picks the last
  stable tag. A repo that need installable pre-release (e.g. `@nlbs/css` beta)
  publishes with `npm publish --tag next`, not a separate GitHub pre-release.

The shared `cliff.toml` uses one broad `tag_pattern`. It match SemVer, CalVer,
prerelease, and action tags, so no repo needs its own config.

## Consequences

### Positive [⌐■_■]

- Libraries keep safe ranges; services get a natural label.
- One `tag_pattern` + one `ignore_tags` works for every repo.
- Prereleases dont clutter the stable changelog.

### Negative [ ✖_✖ ]

- With two schemes, there's no single "latest version" answer across repos.
- Librarie must follow semver; a breaking change needs a major bump.
- A repo that really wants separate pre-release page must opt out via `config`
