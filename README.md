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
docker compose --profile gha down --volumes --rmi all -t 0
```

### Run Backend image from github packages
```
docker run --env-file .env -p 8005:8000 ghcr.io/paulogarcia79/gha-be:latest
```
### Run Frontend image from github packages
```
docker run --env-file .env -p 80:80 ghcr.io/paulogarcia79/gha-fe:latest
```


