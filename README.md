# Aslam
> Aslam is responsible for manage users of genius fit

![aslam12](https://user-images.githubusercontent.com/15850886/163889740-5bd48053-7fb6-452e-a9a0-ed673de2c61c.jpeg)

## Architecture
This API consists of a node application that read/write data from mongodb database.

## Application checklist
- [ ] Swagger
- [ ] API Docs
    - [ ] Dev
    - [ ] QA
    - [ ] PROD
- [ ] Logs
    - [ ] Sentry
    - [ ] Graylog
- [ ] CI
- [ ] CD
- [ ] SonarCloud
- [ ] DataDog


## Documentation (swagger)
- QA: http://margo-api.private.qa.vivareal.io/api-docs/
- PROD: http://margo-api.private.prod.vivareal.io/api-docs/

## How to Run
First, install node modules
```
make install
```

Then to run locally
```
make up
```

To down the application just run:
```
make down
```

## How to Test
```
make test
```

## How to deploy
In construction...

## How to contribute
Never commit directly on `master` instead push a branch and Pull Request.
