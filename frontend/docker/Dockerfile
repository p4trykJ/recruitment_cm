FROM node:lts-alpine as builder

WORKDIR /app

COPY ./frontend .

RUN npm i

RUN npm run build

RUN rm -rf node_modules && \
  API_URL=$API_URL NODE_ENV=production npm i --production

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app  .

CMD [ "npm", "start" ]