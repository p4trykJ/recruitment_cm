FROM node:lts-alpine

COPY ./backend ./

ENV key=value

RUN NODE_ENV=production npm install --production

CMD ["sh", "-c", "npm start --amount=${MESSAGES_AMOUNT}"]
