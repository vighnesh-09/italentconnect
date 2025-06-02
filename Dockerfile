# Stage 1: Build the React app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the App with Nginx
FROM nginx:1.25-alpine

# Set working directory in Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built React app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html
# COPY --from=builder /app/build /usr/share/nginx/html

# Create a custom Nginx configuration
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
    error_page 500 502 503 504 /50x.html; \
    location = /50x.html { \
        root /usr/share/nginx/html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose the port Cloud Run will use
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
