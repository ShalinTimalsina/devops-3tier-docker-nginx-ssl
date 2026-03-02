# 1. Use a lightweight Nginx web server base image
FROM nginx:alpine

# 2. Copy our static HTML file into the default Nginx public directory
COPY index.html /usr/share/nginx/html/index.html

# 3. Expose port 80
EXPOSE 80

# Nginx alpine image starts the server automatically, so no CMD is needed here.
