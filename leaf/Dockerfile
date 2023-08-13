#using node as base image
FROM node:18-alpine
#setting working directory in container
WORKDIR /app/frontend
#copying package and package-lock .json to container
COPY package*.json ./
#install dependencies
RUN npm install
# copy the project directory to container
COPY . . 
#Expose the port 
EXPOSE 5173
#command to start vite development server
CMD ["npm","run","dev"]