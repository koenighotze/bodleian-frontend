# syntax=docker/dockerfile:1
# hadolint ignore=DL3007
FROM cgr.dev/chainguard/node:latest AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# hadolint ignore=DL3007
FROM cgr.dev/chainguard/nginx:latest

ENV NGINX_PORT=8080
COPY ./nginx.templates /etc/nginx/templates/
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

