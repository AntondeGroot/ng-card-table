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

## Licence

MIT — see [LICENSE](LICENSE).
