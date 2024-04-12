FROM node:21-alpine3.18

# set working directory
WORKDIR /Adetumi_Adeleke_site

# add `/app/node_modules/.bin` to $PATH
ENV PATH /Adetumi_Adeleke_site/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 8018

# start app
CMD ["npm", "run", "dev","--","--host", "0.0.0.0"]