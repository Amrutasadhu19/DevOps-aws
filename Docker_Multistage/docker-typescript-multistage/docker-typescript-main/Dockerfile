# stage: 1- BUILD INDEX.JS 

FROM node:16-alpine as development

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build   # here node js application build

# stage: 2 - FINAL

FROM node:16-alpine as production

WORKDIR /app

COPY package*.json .
 # from using npm only that packages install that require for production if we write npm install then it install all the dependencies.
 #instead of install all dependencies it only install dependecies that defined in dependecies in package.json not install dependences that defined in devdependencies.
RUN npm ci --only=production  

# copy all build nodejs app in to current working directory of this stage
COPY --from=development /app/dist ./dist  
EXPOSE 4000  
# finally run our application
CMD ["node", "dist/index.js"]
