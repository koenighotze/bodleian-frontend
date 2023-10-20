# syntax=docker/dockerfile:1

FROM node:lts-alpine3.15 AS build
FROM cgr.dev/chainguard/node:latest AS build
# ENV USER=bodleian
# ENV _UID=10001
# RUN addgroup --gid "10001" "bodleian"
# RUN adduser \
#     --disabled-password \
#     --gecos "" \
#     --home "$(pwd)" \
#     --ingroup "${USER}" \
#     --no-create-home \
#     --uid "${_UID}" \
#     "${USER}"

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# FROM nginx:1.25.2-alpine
FROM cgr.dev/chainguard/nginx:latest

ENV NGINX_PORT=8080
COPY ./nginx.templates /etc/nginx/templates/
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

