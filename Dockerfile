FROM --platform=linux/arm64/v8 node:14-alpine as build
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/arm64/v8 node:14-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist

RUN npm install express

COPY server.js /app

EXPOSE 80

CMD ["node", "server.js"]
