FROM node:alpine as builder
WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
# #it create build in that inde.html,css and js files stored that only we require.
RUN ["npm","run","build"]

FROM nginx
EXPOSE 80
# # # no CMD command require because nginx able to run when container is running.
COPY --from=builder /app/build /usr/share/nginx/html





