FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install --silent

RUN npm install react-scripts@5.0.1 -g --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]