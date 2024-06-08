FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install react-native-scripts --save-dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
