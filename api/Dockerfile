FROM golang:1.20-alpine AS builder

WORKDIR /app
COPY . .
RUN go mod download

ARG MYSQL_ROOT_PASSWORD
ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_HOST
ARG JWT_SECRET
ARG PASSWORD
ARG HASH_COST
ARG ENV
ARG ISS
ARG ACCESS_CONTROL_ALLOW_ORIGIN

ENV MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
    MYSQL_DATABASE=$MYSQL_DATABASE \
    MYSQL_USER=$MYSQL_USER \
    MYSQL_PASSWORD=$MYSQL_PASSWORD \
    MYSQL_HOST=$MYSQL_HOST \
    JWT_SECRET=$JWT_SECRET \
    PASSWORD=$PASSWORD \
    HASH_COST=$HASH_COST \
    ENV=$ENV \
    ISS=$ISS \
    ACCESS_CONTROL_ALLOW_ORIGIN=$ACCESS_CONTROL_ALLOW_ORIGIN

RUN CGO_ENABLED=0 go build -o main cmd/server/main.go
RUN CGO_ENABLED=0 go build -o migrate cmd/migrate/main.go

FROM alpine AS prod

RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=builder /app /app

EXPOSE 8000
ENTRYPOINT [ "/app/main" ]

FROM golang:1.20-alpine AS dev

ENV CGO_ENABLED 0
WORKDIR /app

RUN apk update && apk add git
COPY go.mod go.sum ./
RUN go mod download
EXPOSE 8000

CMD ["go", "run", "cmd/server/main.go"]
