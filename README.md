# __PROJECT_TITLE__

* Author: [Jonathan M. Wilbur](https://jonathan.wilbur.space) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2019
* License: [MIT License](https://mit-license.org/)
<!-- * [![Build Status](http://localhost:8080/buildStatus/icon?job=)](http://localhost:8080/job//) -->
* [![Build Status](https://dev.azure.com/wildboarsoftware/pipeline-testeroo/_apis/build/status/JonathanWilbur.typescript-project-template?branchName=master)](https://dev.azure.com/wildboarsoftware/pipeline-testeroo/_build/latest?definitionId=1&branchName=master)

Be sure to correct information in:

- `README.md` (This file.)
- `package.json`
- `serverless.yml`
- `azure-pipelines.yml`
- `webpack.config.js`
- `Jenkinsfile`
- `.mailmap`

## Known Issues

- Running `npm run lint` only works on Posix hosts, because the single quotes
  get escaped on Windows. If you have the ESLint plugin installed and
  configured, you should still be able to get live linting on Windows.
