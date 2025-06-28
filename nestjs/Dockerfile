FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install && npm install --save-dev @types/node && npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app

RUN adduser -D appuser
USER appuser

EXPOSE 3000
CMD ["npm", "start"]
