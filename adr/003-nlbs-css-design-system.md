# ADR 003: @nlbs/css - System Design for Every Project Nanoo Website

- **Status:** Draft
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
<!-- - [What are the benefits for the system?] -->
<!-- - [How does it affect performance?] -->

### Negative [ ✖_✖ ]

<!-- - [What are the trade-offs?] -->
<!-- - [What are the limitations we must accept?] -->
