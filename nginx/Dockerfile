FROM owasp/modsecurity:nginx


# Copier les fichiers de configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY modsecurity.conf /etc/modsecurity.d/modsecurity.conf

# Installer unzip
RUN apt-get update && apt-get install -y unzip curl && rm -rf /var/lib/apt/lists/*

# Télécharger et configurer OWASP CRS
RUN mkdir -p /etc/nginx/modsecurity/rules/owasp-crs && \
    curl -L https://github.com/coreruleset/coreruleset/archive/refs/heads/v4.0/dev.zip -o /tmp/crs.zip && \
    unzip /tmp/crs.zip -d /tmp && \
    mv /tmp/coreruleset-*/crs-setup.conf.example /etc/nginx/modsecurity/rules/owasp-crs/crs-setup.conf && \
    mv /tmp/coreruleset-*/rules /etc/nginx/modsecurity/rules/owasp-crs/

# Créer un groupe et utilisateur 
RUN addgroup --system nginxgroup && \
    adduser --system --ingroup nginxgroup --home /nonexistent --shell /sbin/nologin nginxuser && \
    chown -R nginxuser:nginxgroup /etc/nginx /etc/modsecurity.d /var/cache/nginx /var/log/nginx /run

# Passer à l'utilisateur non-root
USER nginxuser

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]



