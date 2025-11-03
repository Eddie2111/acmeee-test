## Install all the dependencies

  pip install -r requirements.txt

## Start the project

  uvicorn index:app --port 10000 --reload --log-level debug

## Build the docker image

  docker build -t acmee-test-backend .

## Run the docker image

  docker run -p 10000:10000 acmee-test-backend

# Note: Make sure the folder names are consistent along with the docker compose you are running.