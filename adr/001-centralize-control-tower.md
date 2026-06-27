# ADR 001: Centralized Organization Control Tower

- **Status:** Accepted
- **Date:** 2026-06-13
- **Deciders:** Adnan Slamet Wibowo

## Context

Nanoo Labs need standarization on all repository organization (Welcome Bot, Issue Templates, Progress Tracking. Because Manually configuring each repo is **bloated** and difficult to maintain. So, We need one "Single Source of Truth".

## Decision

So, We using and adjust repository `.github` as the **Control Tower**. All global configuration, automation roadmap via `progress`, and community standart centered here.
We used **GitHub Actions** witb identity **nanoobot** for independent automation.

## Consequences

### Positive [⌐■_■]

- **Consistency:** All Repository Nanoo Labs automatically meets the same standards.
- **Maintainability:** just update in one place, and everything is affected.
- **Transparency:** Progress roadmap organization can being track via JSON publicly.

### Negative [ ✖_✖ ]

- **Single Point of Failure:** if repository `.github` problem, organization automation has been disrupted.
- **Permission:** need settings `write permissions` specific to the organization level.
