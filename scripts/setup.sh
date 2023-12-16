#!/bin/bash

THIS_FILE_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "${THIS_FILE_DIR}/.." && pwd)"
SERVER_DIR="${PROJECT_DIR}/api"
ENV_FILE="${PROJECT_DIR}/.env"

cd ${PROJECT_DIR}

docker compose down

docker compose up -d --build
