FROM node:latest
WORKDIR /app
EXPOSE 8031
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
