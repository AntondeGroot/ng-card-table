# ng-card-table

An angular library used for making card games and other tile based games like Rummikub.

The library itself — what it does, its API and how to use it — is described in
[projects/ng-card-table/README.md](projects/ng-card-table/README.md). That is also the page npm
shows for the `ng-card-table` package.

## Working on the library

This repository is an Angular workspace holding the library in `projects/ng-card-table`.

| Command                 | What it does                                                        |
| ----------------------- | ------------------------------------------------------------------- |
| `npm ci`                | Install exactly the versions in `package-lock.json`.                |
| `npm test`              | Run the unit tests, watching for changes.                           |
| `npm run test:coverage` | Run them once, failing below 100% coverage.                         |
| `npm run lint`          | ESLint, with no warnings allowed.                                   |
| `npm run lint:styles`   | Stylelint.                                                          |
| `npm run format`        | Format everything with Prettier (`format:check` only checks).       |
| `npm run diagrams`      | Regenerate the UML diagram from its data (`diagrams:check` checks). |
| `npm run build`         | Build the package into `dist/ng-card-table`, with the licence.      |

CI runs every check on each pull request; `main` only accepts changes through one that passes.

## Publishing to npm

- First check if you are logged in on NPM by running `npm whoami`
- If not run `npm login`

Publish the built package in `dist/ng-card-table`, not the repository root. The root
`package.json` is the workspace (`ng-card-table-workspace`) and is marked `"private": true` so it
can never be published by accident; running `npm publish` there fails with `EPRIVATE`.

1. Bump `version` in [projects/ng-card-table/package.json](projects/ng-card-table/package.json).
2. Build, check what will be uploaded, then publish:

   ```sh
   npm run build
   npm publish ./dist/ng-card-table --dry-run
   npm publish ./dist/ng-card-table
   ```

Always rebuild first: `dist` takes its version from the library's `package.json` at build time, so
a stale build publishes the old version.

## Licence

MIT — see [LICENSE](LICENSE).
