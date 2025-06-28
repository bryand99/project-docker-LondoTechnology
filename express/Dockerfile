FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install --production

RUN adduser -D appuser
USER appuser

EXPOSE 3000
CMD ["node", "index.js"]
