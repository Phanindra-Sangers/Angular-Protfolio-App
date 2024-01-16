FROM node:18-alpine AS build 
WORKDIR /app COPY . . 
RUN npm install 
RUN npm run build 
# Stage 2: Final Image 
FROM nginx:alpine 
COPY --from=build /app/dist /usr/share/nginx/html