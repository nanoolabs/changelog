# ADR 002: Centralized Release Tracking and Refactor Kaomoji Branding

- **Status:** Accepted
- **Date:** 2026-07-07
- **Deciders:** Adnan Slamet Wibowo

## Context

Every repository in Nanoo Labs need a clear, automated changelog to maintain tracking and developer experience (DX).
Use default GitHub Release format or standard emojis looks bloat, inconsistent, and lacks structural identity.

## Decision

We decided to use `git-cliff` inside a central repository name `nanoolabs/actions`.
We also create a standard unicode kaomojii list for our commit groups

Technical details:

1.  **Decouple System:** The config (`cliff.toml`) and the wrapper (`action.yml`) live only inside `nanoolabs/actions`. Other repositorie just call this action remotely.
2.  **No Scope Redundancy:** We remove the conventional commit scopes (like `(api)` or `(ui)`) from the final text
3.  **Auto Trigger:** The release workflow starts automatically when the system detect a version change inside `package.json` on a push to the brach `main`.

## Consequences

### Positive [⌐■_■]

- Performance: Use a composite action wrapper inside our central runner means zero extra download or network latency during build steps.
- Clean layout: scopes and formatting commit IDs to inline markdown link make the changelog readable.

### Negative [ ✖_✖ ]

- Strong reliance on conventional commits: Developers must format commit message correct (e.g., `feat:`, `fix:`); otherwise, the log will fall under the general "Other Changes" category
