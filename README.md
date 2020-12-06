# __PROJECT_TITLE__

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

## Features

- Included NPM Scripts
  - Line counts with `sloc`
  - Code formatting with `prettier`
  - Forcibly install the latest updates with `npm-check-updates`
- NodeJS and Webpack builds
- ESLint linting preconfigured
- Docker and Docker Compose configuration
- Jenkinsfile
- VS Code configuration
  - Debugging
  - Extension recommendations
  - Tasks
- Jest testing
- GitHub configuration
  - Workflows / Actions
  - Issue templates
  - Pull request templates
  - Security policy
  - Support policy
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- JSDoc generation

## Usage

Be sure to correct information in:

- `README.md` (This file.)
- `package.json`
- `webpack.config.js`
- `Jenkinsfile` (Specifically, the `url` for the Git repository.)
- `./test/testpage.html`
- `Dockerfile`
- `docker-compose.yaml`

See the scripts in `package.json` to understand usage.

### Recommended Package Inclusions

- [i18next](https://www.npmjs.com/package/i18next) for language internationalization
- [ono](https://www.npmjs.com/package/ono) for error handling
- [globalize](https://www.npmjs.com/package/globalize) for currency, units,
  timezones, date formatting, etc.
- [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript)
  to compile JSON Schema to TypeScript interfaces
- [winston](https://www.npmjs.com/package/winston) for logging
- [moment](https://www.npmjs.com/package/moment) for date and time manipulation
- [buffer](https://www.npmjs.com/package/buffer) to use `Buffer` in the browser
- [uuid](https://www.npmjs.com/package/uuid) to generate UUIDs
- [ajv](https://www.npmjs.com/package/ajv) for JSON schema validation
- [os-locale](https://www.npmjs.com/package/os-locale) to get the locale from the OS
- [prettier](https://www.npmjs.com/package/prettier) for code formatting
- [eol](https://www.npmjs.com/package/eol) for line-ending control
- [is-debugging](https://www.npmjs.com/package/is-debugging) to determine if NodeJS is debugging.

### Standards to Follow

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Semantic Versioning](https://semver.org/) or [Calendar Versioning](https://calver.org/)
- [No-Color](https://no-color.org/)

## To Do

- [ ] Complexity Reporting
  - I like [this package](https://www.npmjs.com/package/grunt-complexity) for
    this, but I am not keen on installing Grunt just for this.
- [ ] Profiling
- [ ] Deno compilation?
- [x] JSONSchema-to-TypeScript-Interface compiler?
- [x] Add internationalization boilerplate
- [x] Create a separate schema folder
- [ ] Configure GPG Commit Signing
- [ ] Experiment with the Conventional Commits VS Code Extension
- [ ] Require newlines between function parameters
  - [This](https://eslint.org/docs/rules/function-paren-newline) applies to arguments as well. No viable option found.
- [ ] Require newlines after `export`.

## Check out these GitHub Actions and Apps

They may be useful, depending on what this becomes.

- https://github.com/marketplace/actions/shellcheck
- https://github.com/marketplace/actions/dipshit-kubeval
- https://github.com/marketplace/actions/xml-lint
- https://github.com/marketplace/actions/docker-lint
- https://github.com/marketplace/actions/single-node-kubernetes-cluster
- https://github.com/marketplace/actions/yaml-lint
- https://github.com/marketplace/actions/run-jest
- https://github.com/marketplace/actions/readable-readme
- https://github.com/marketplace/actions/alcide-advisor-kubernetes-scan
- https://github.com/marketplace/actions/secret-scan
- https://github.com/marketplace/actions/404-links
- https://github.com/marketplace/actions/validate-json
- https://github.com/marketplace/actions/send-email
- https://github.com/apps/dco (This provides Commit Sign-Off)
- https://github.com/marketplace/create-issue-branch
- https://github.com/marketplace/auto-branch
- https://github.com/marketplace/auto-add-label
- https://github.com/marketplace/semantic-pr-title
- https://github.com/marketplace/js-bundle-analyzer

## Known Issues

- Running `npm run lint` only works on Posix hosts, because the single quotes
  get escaped on Windows. If you have the ESLint plugin installed and
  configured, you should still be able to get live linting on Windows.
