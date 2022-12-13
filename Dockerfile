FROM node:14-alpine as build
WORKDIR /app
COPY package.json package-lock.json  ./
RUN npm ci

COPY jest.config.js ./
COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx:1.21.5-alpine
COPY nginx.conf.template /etc/nginx/templates/
COPY --from=build /app/build /usr/share/nginx/html

ENV NGINX_PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]


