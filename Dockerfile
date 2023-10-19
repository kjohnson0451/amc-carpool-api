# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Command to start your application

# Since we're in development mode, use `nodemon` and `babel-node`
CMD ["sh", "-c", "npx nodemon --exec npm run babel-node -- src/server.js" ]
