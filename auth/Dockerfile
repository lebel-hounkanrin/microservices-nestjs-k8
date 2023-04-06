FROM node:19.7-slim
WORKDIR /app
COPY ./package.json /app/
RUN npm install 
COPY . /app/
CMD [ "npm", "start", ]