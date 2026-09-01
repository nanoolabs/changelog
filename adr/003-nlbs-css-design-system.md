# ADR 003: @nlbs/css - System Design for Every Project Nanoo Website

- **Status:** Accepted
- **Date:** 2026-07-21
- **Deciders:** Adnan Slamet Wibowo

## Context

Okey, technical problem about design systems for Nanoo Project (Web apps) especially on inner CSS while managing styling websites.
@nlbs/css, technically a package with CSS files + a package.json, right now for handle consistency design systems nanoo webs.

## Decision

We choose solve about problem design systems and build @nlbs/css on [nanoolabs/css](https://github.com/nanoolabs/css).
So, this minimize hardcoded, redundancy, and inconsistency styling. And Then this package [@nlbs/css](https://www.npmjs.com/package/@nlbs/css) become Single Source of Truth (SSoT) for our visual identity for the Nanoo

## Consequences

### Positive [⌐■_■]

- **Consistency:** Every websites Nanoo have design, theme, and styling same

### Negative [ ✖_✖ ]

- **Single coupling point.** One token change goes to every site at once. So a breaking
  CSS change needs a new version of `@nlbs/css`, and every site must re-pin to it. That
  is a shared release, not a quick fix on one site.
