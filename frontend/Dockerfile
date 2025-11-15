# Use Nginx for static hosting
FROM nginx:stable-alpine

# Copy your static files to nginx container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
