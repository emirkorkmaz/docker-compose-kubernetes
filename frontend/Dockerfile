# first thing first, prepare the frontend web app container
# use "as" keyword for tagging
# we are building for prod this time
# we will serve the content over nginx
FROM node:alpine as building
WORKDIR /usr/apps/frontend
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "build"]

FROM nginx
# /usr/share/nginx/html is default serving folder of nginx
COPY --from=building /usr/apps/frontend/build /usr/share/nginx/html
