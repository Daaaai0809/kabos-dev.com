#!/bin/bash

THIS_FILE_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "${THIS_FILE_DIR}/.." && pwd)"
SERVER_DIR="${PROJECT_DIR}/api"
ENV_FILE="${PROJECT_DIR}/.env"

if [ -f "${ENV_FILE}" ]; then
    while IFS='=' read -r key value; do
        # 空行やコメント行を無視
        if [[ "$key" && "$value" && ! "$key" =~ ^# ]]; then
            export "$key"="$value"
        fi
    done < "$ENV_FILE"
else
    echo "環境変数ファイルが見つかりません！"
    echo "プロジェクトルートに.envファイルを作成してください。"
    exit 1
fi

cd ${SERVER_DIR}

flyctl ssh console -t $FLY_AUTH_TOKEN
