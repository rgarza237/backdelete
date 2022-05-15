FROM node:16
WORKDIR /usr/src/app
COPY package.json .
COPY . .
RUN npm install
EXPOSE 8035
CMD ["npm", "start"]