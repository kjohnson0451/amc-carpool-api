# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Command to start your application

# If we're in development mode, use `nodemon`
# If we're in production mode, just use regular `node`
CMD [\
  "sh", "-c",\
  "if [ \"$NODE_ENV\" = \"development\" ]; then\
    node_modules/.bin/nodemon --exec npm run babel-node -- src/server.js;\
  else\
    node src/server.js;\
  fi"\
  ]
