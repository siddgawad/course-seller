Think of your code going through quality gates:

Formatter (Prettier) – makes code look consistent. No brains, just formatting.

Linter (ESLint) – catches mistakes & risky patterns early.

Type checker (TypeScript) – prevents type bugs at compile time.

Tests (Vitest/Playwright) – prove behavior.

Git hooks (Husky + lint-staged + commitlint) – block bad code/messages before they land.

CI – reruns checks in a clean environment on PRs/main.

Each solves a different problem; none replace the others.
