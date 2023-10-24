# Utilisation de l'image node:latest comme base pour le processus de construction.
FROM node:16 as build

# Définit le répertoire de travail dans le conteneur.
WORKDIR /usr/local/app

# Copie tous les fichiers du répertoire actuel dans le répertoire de travail du conteneur.
COPY ./ /usr/local/app/

# Installe les dépendances en utilisant yarn.
RUN yarn

# Exécute le script de construction qui génère les fichiers statiques pour la production.
RUN npm run build

# Utilisation de l'image nginx:latest pour servir l'application frontend.
FROM nginx:latest as production

# Copie la configuration nginx dans le conteneur.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie les fichiers statiques générés dans l'étape de construction vers le répertoire de base nginx.
COPY --from=build /usr/local/app/dist/bobapp /usr/share/nginx/html

# Expose le port 80 pour que l'application soit accessible.
EXPOSE 80
