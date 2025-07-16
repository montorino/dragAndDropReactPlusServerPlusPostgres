FROM node:22-alpine

#Set the working directory in the container
WORKDIR /usr/src/client

#Copy the package.json and the package-lock.json files to the container. Period is the current working directory /app
COPY package*.json . 

#Install the depencdencies
RUN npm install


#Copy the rest of the application code
COPY . .

#Define the command to run the application
CMD ["npm", "run", "dev"]