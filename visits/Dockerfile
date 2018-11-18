FROM node:alpine

WORKDIR /usr/apps/visits

COPY ./package.json /.
RUN npm install
COPY ./ ./

CMD ["npm", "start"]