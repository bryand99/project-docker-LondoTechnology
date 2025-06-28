FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine

# Création d'un utilisateur non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Créer les répertoires nécessaires et définir les permissions
RUN mkdir -p /var/cache/nginx /run \
    && chown -R appuser:appgroup /var/cache/nginx /run \
    && chown -R appuser:appgroup /etc/nginx

# Copier le site statique
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration personnalisée de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Donner l'accès aux fichiers html
RUN chown -R appuser:appgroup /usr/share/nginx/html

# Passer à l'utilisateur non-root
USER appuser

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
