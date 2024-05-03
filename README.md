# gha_pytest
simple pytest github actions sample

## Before deployment
Set environment variables to .env file based on base.env.
```
cp base.env .env
```
## Local Development 

### Run all containers
```
docker compose --env-file .env --profile gha up -d
```

### Remove containers, images, and volumes
```
docker compose --profile bootstrap down --volumes --rmi all -t 0
```
