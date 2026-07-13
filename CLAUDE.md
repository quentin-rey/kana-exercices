# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git workflow

- Every feature or fix gets its own branch — never commit directly to `main`.
- Committing is fine to do automatically, without asking first.
- Pushing is never automatic — always ask for explicit confirmation before running `git push`, regardless of branch.

## What this is

Kana Exercices is a static, client-side web app (plain HTML/CSS/JS, no framework, no build step) for practicing Japanese kana (hiragana/katakana) recognition: the user is shown a random kana and types its transcription, with immediate feedback. Deployed via GitHub Pages directly from these files.

## Structure

- `index.html` — page structure/markup.
- `script.js` — exercise logic (random kana selection, input handling, feedback).
- `style.css` — styling.
- `logo.png` — app logo, also shown in `README.md`.

## Working conventions

- No package manager, bundler, or test suite — open `index.html` directly in a browser to verify changes.
- Keep everything dependency-free (vanilla JS) unless there's a strong reason to introduce a build step.
