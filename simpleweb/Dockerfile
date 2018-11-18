# specify base image
FROM node:alpine

# specify workdir
WORKDIR /usr/app

# install dependencies
# only package.json affects npm install process
COPY ./package.json ./
RUN npm install

# copy files after installation to not to affect npm install
COPY ./ ./

# set default command
CMD ["npm", "start"]