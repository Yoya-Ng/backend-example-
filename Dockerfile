# Set the base image to node:12-alpine
FROM node:18-alpine

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

# Install dep
RUN yarn install

EXPOSE 3001
# Start App
CMD ["npm", "run", "start"]
