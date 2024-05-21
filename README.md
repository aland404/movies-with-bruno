<p align="center">
  <a href="https://sitechecker.pro/wp-content/uploads/2022/09/1-general-it-movie-banner.jpg" target="blank"><img src="https://sitechecker.pro/wp-content/uploads/2022/09/1-general-it-movie-banner.jpg" width="500" alt="Movie library" /></a>
</p>

## Description

Demonstrate [Bruno](https://www.usebruno.com/) capabilities with a simple server:
* requests
* [Bru markup language](https://docs.usebruno.com/bru-lang/overview)
* [secret management](https://docs.usebruno.com/secrets-management/overview)
* env vars
* [vars](https://docs.usebruno.com/scripting/vars)
* [scripting](https://docs.usebruno.com/scripting/getting-started)
* [testings](https://docs.usebruno.com/testing/introduction)
* [bru cli](https://docs.usebruno.com/bru-cli/overview)

1. A simple server using [Nest](https://nestjs.com/) framework TypeScript for serving and manipulating movies.
* Three contexts:
  * Movies CRUD
  * Auth (signIn and getProfile from token): jwt authentication with @nestjs/jwt
2. API Collections with [Bruno](https://www.usebruno.com/)  for movies and auth contexts (bruno collection folders)


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stay in touch

- Author - [Alan Duchêne #aland404](https://github.com/aland404?tab=repositories)

## License

[MIT licensed](LICENSE).
