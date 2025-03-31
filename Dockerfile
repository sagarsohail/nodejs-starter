# Use an official Node.js base image
FROM node:18
# Set the working directory inside the container
WORKDIR /app
# Copy package files first and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the app's source code
COPY . .
# Expose the port your app runs on
EXPOSE 3000
# Start the app
CMD ["node", "index.js"]