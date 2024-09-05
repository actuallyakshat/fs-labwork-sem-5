# Use an official Node.js runtime as a parent image
FROM node:22.7.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
ENV PORT 3000
EXPOSE ${PORT}

# Start the app with nodemon for development
CMD ["npm", "run", "dev"]
