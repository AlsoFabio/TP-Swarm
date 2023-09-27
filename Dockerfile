FROM node:18-alpine

WORKDIR /servidor

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "dev"]