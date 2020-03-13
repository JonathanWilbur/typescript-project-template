# __PROJECT_TITLE__

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

Be sure to correct information in:

- `README.md` (This file.)
- `package.json`
- `serverless.yml`
- `webpack.config.js`
- `Jenkinsfile` (Specifically, the `url` for the Git repository.)
- `./test/testpage.html`
- `Dockerfile`
- `docker-compose.yaml`

## To Do

- [ ] Complexity Reporting
  - I like [this package](https://www.npmjs.com/package/grunt-complexity) for
    this, but I am not keen on installing Grunt just for this.
- [ ] Profiling
- [x] Benchmarking
- [ ] Commit Sign-Off

## Known Issues

- Running `npm run lint` only works on Posix hosts, because the single quotes
  get escaped on Windows. If you have the ESLint plugin installed and
  configured, you should still be able to get live linting on Windows.
