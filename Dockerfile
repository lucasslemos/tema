# Use a base image with Node.js
FROM node:20.9.0

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Your application will listen on port 3001
EXPOSE 3001

# Command to run your application
# CMD ["node", "server.js"]
CMD ["node", "server_dev.js"]
