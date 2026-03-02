# 1. Use a lightweight Node.js base image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy ONLY the package.json first to leverage Docker layer caching
COPY package.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY server.js ./

# 6. Expose the port the app runs on (for documentation purposes)
EXPOSE 3000

# 7. Define the command to start the application
CMD ["node", "server.js"]
