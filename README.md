# Aslam
> Aslam is responsible for manage users of genius fit

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

**Important** to use `/render/send` in development correctly, make sure you have the AWS credentials in enviroment.

If `/render/send` returns a response with `statusCode: 500` , your message/email will be reprocessed, so consider ignoring this as an error.

## How to Test
```
make test
```

## How to deploy
In construction...

## How to contribute
Never commit directly on `master` instead push a branch and Pull Request.
