# ADR 005: Release Pipeline v2

- **Status:** Accepted
- **Date:** 2026-08-31
- **Deciders:** Adnan Slamet Wibowo

## Context

ADR 002 set up one central release. It used `git-cliff` and kaomoji. Over time the
code changed. Some used the old tag `@release-action-v1`,
some used the `@main` branch, and some passed a `version` input that is now gone.

## Decision

`nanoolabs/actions` is the only home of release engine.

- **`release-action/action.yml`** is a composite action. It wrap
  [`orhun/git-cliff-action@v4`](https://github.com/orhun/git-cliff-action).
  It only writes the changelog. The consumer workflow makes GitHub Release.
- **`cliff.toml`** is the default config. The `config` input pick file.
  It goes in this order: `config` input → `cliff.toml` at the repo root → the
  bundle file. This is how a repo changes default.
- **Changelog layout:** the header is just `## Changelog`. The version live only in
  the GitHub Release title.Each line is short:
  `- [scope:] message`. The `scope` shows only when the commit has one. Group order
  is fixed with `<!-- N -->` (removed later by `striptags`). One `[Full diff]` link
  sits on top. Kaomoji group names come straight from `nanoolabs/kaomoji`.
- **Tag name:** a bare major tag `v2`. This repo has one action, so the tag does not
  say the action name again (`release-action@v2`, not `@release-action-v2`).
- **Consumers** (`cdn`, `css`, `nanoolabs.dev`, `webrings`, `etc`) call `release-action@v2`.
  They must use `fetch-depth: 0` and create the tag before `--latest` runs.
- The tool runs `--latest` (not `--unreleased`). So, the changelog covers only the
  newest tagged release.

## Consequences

### Positive [⌐■_■]

- The same clean release notes appear everywhere. No extra version or footer, and
  no `by/via` noise per line as before :3.
- One engine and one default config.
- No repeated changelog code in the consumer repos.
- Kaomoji stay source of truth, so the brand identity stay.

### Negative [ ✖_✖ ]

- It depend on conventional commits. A commit without the right prefix quietly goes
  to `[ □_□ ] Other` (`filter_unconventional = false`). So enforcing it is a separate job.
- The tag must exist before `--latest`. If not, the changelog cover wrong range.
- Group order depend on the `<!-- N -->` trick. It may act differently in other
  git-cliff versions
- Releases still show as `github-actions[bot]`. The consumers use
  `secrets.GITHUB_TOKEN`. To show a bot or human name, new PAT needed.
