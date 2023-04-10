# Set the base image to node:12-alpine
FROM node:18-alpine

# Specify where our app will live in the container
WORKDIR /app
COPY package*.json ./
# Prepare the container for building React

# Copy the React App to the container
COPY . /app/

RUN yarn install

EXPOSE 80
# Start App
CMD ["npm", "run", "start"]
