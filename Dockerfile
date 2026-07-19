# Use a lightweight nginx image to serve static files
FROM nginx:alpine

# Remove default nginx content and copy the site files
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
