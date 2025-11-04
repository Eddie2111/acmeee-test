# Demo Project: Legal Assistant

## Dependencies:

- Frontend: Vite-React, Tanstack, Tailwindcss
- Backend: FastAPI, Pydantic 

## build the backend with docker

from /backend, run,

```bash
docker build -t acmeai-backend . --no-cache
```

## build the frontend with docker

from /frontend, run,

```bash
docker built -t acmeai-frontend . --no-cache
```

## spin up the docker compose

from root, run

```bash
  docker-compose up --build
```

Project should be available at localhost:3000 for frontend and localhost:10000 at backend

## Source:

Github repository: https://github.com/Eddie2111/acmeee-test

