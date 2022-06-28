# yarn docs && docker build -t kynno/docs-kynno-sdk-js .
FROM nginx:1.14-alpine
COPY docs/ /usr/share/nginx/html/