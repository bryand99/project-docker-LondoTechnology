FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 4000
CMD ["npm", "start"]
