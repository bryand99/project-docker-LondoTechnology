#!/bin/bash

# Créer le dossier ssl s'il n'existe pas
mkdir -p nginx/ssl

# Générer la clé privée et le certificat auto-signé valide 365 jours
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/ssl/key.pem \
  -out nginx/ssl/cert.pem \
  -subj "/C=CM/ST=Littoral/L=Douala/O=DevOps/CN=localhost"

echo "Certificat et clé générés dans nginx/ssl/"
