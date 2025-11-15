FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY . .

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
