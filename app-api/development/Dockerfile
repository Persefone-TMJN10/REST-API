FROM node:11.4.0

WORKDIR /app-api

COPY package*.json ./

COPY webpack.config.js ./

RUN npm install

CMD ["npm", "run", "dev"] 