# build stage
FROM node:lts-alpine as build-stage
LABEL maintainer="Miguel Cantillana <mcantillana@linets.cl>"

# arguments build
ARG BASE_API_URL="http://localhost:8000"

# enviroments 
ENV REACT_APP_BASE_API_URL=$BASE_API_URL

WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build


# production stage
FROM nginx:stable-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
