FROM node:14 as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./
COPY yarn.lock ./

USER node

RUN yarn

COPY . .

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "src/index.js"]