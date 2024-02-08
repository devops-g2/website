FROM --platform=linux/arm64/v8 node:14-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

RUN node ./node_modules/esbuild/install.js

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
