FROM node:20-alpine

WORKDIR /app
COPY . .

# Prérequis Oracle client
RUN apk add --no-cache libaio curl && \
    npm install oracledb && \
    npm install --production

# Créer un utilisateur non root
RUN adduser -D appuser
USER appuser

EXPOSE 3000
CMD ["node", "index.js"]
